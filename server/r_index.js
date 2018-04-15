const express = require("express");
const path = require("path");
const crypto = require("crypto");
const http = require("http");
const socketio = require("socket.io");
const { OAuth2Client } = require("google-auth-library");

const { User, Game } = require("./classes");

const G_CLIENT_ID = "406419867255-aiscktvrh9qgf35pi1602b5pmt15040g.apps.googleusercontent.com";
const port = 3001;

const expressApp = express();
const httpServer = http.createServer(expressApp);
const gClient = new OAuth2Client(G_CLIENT_ID);
const socketServer = socketio(httpServer);

httpServer.listen(port, () => {
    console.log("listening on port", port);
});

expressApp.use(express.static(path.join(__dirname, "../build")));

const state = {
    users: {},
    games: {},
    nextGameID: 0
};

socketServer.on("connection", socket => {
    console.log("Anonymous Socket Connected!");
    let userID = 0; // This is the userToken for the user related to THIS socket

    socket.on("authenticate", (userToken, sendResponse) => {
        console.log("Got authenticate event")
        verifyToken(userToken).then(userData => {
            userID = userData.userid;
            if (state.users[userID]) {
                let user = state.users[userID];
                console.log("User was here before");
                user.socket = socket;
                if (user.avatar === -1) {
                    sendResponse({goTo: "avatar"});
                } else if (user.inGame !== -1) {
                    sendResponse({goTo: "game", id: user.inGame});
                }
                else {
                    sendResponse({goTo: "home"});
                }
            } else {
                console.log("User was not here before, make new 'account'");
                state.users[userID] = new User(userID, userData.name);
                sendResponse({goTo: "avatar"});
            }
            console.log("Got user:", userData);
        }).catch(error => {
            console.log("Bad things happened:", error);
        });
    });

    socket.on("setAvatar", (avatarIndex, sendResponse) => {
        if (userID) {
            state.users[userID].avatar = avatarIndex;
            sendResponse();
            console.log(state.users[userID].name + " set their avatar");
        }
    });

    socket.on("createGame", sendResponse => {
        if (userID) {
            let gameID = state.nextGameID++;
            state.games[gameID] = new Game(gameID, userID);
            state.users[userID].inGame = gameID;
            sendResponse(gameID);
            lobbyUpdate();
            console.log(state.users[userID].name + " created game " + gameID);
        }
    });

    socket.on("deleteGame", (gameID, sendResponse) => {
        if (userID) {
            Object.keys(state.games[gameID].players).forEach(playerID => {
                state.users[playerID].inGame = -1;
            })
            delete state.games[gameID];
            sendResponse();
            lobbyUpdate();
            console.log(state.users[userID].name + " deleted game " + gameID);
        }
    });

    socket.on("joinLobby", () => {
        if (userID) {
            socket.join("lobby");
            lobbyUpdate();
            console.log(state.users[userID].name + " joined the lobby");
        }
    });

    socket.on("leaveLobby", () => {
        if (userID) {
            socket.leave("lobby");
            console.log(state.users[userID].name + " left the lobby");
        }
    });

    socket.on("joinGame", (gameID, sendResponse) => {
        if (userID) {
            if (state.games[gameID].addPlayer(userID)) {
                state.users[userID].inGame = gameID;
                sendResponse(true);
                gameUpdate(gameID);
                lobbyUpdate();
                console.log(state.users[userID].name + " joined game " + gameID);
            } else {
                sendResponse(false);
            }
        }
    });

    socket.on("leaveGame", (gameID, sendResponse) => {
        if (userID) {
            if (state.games[gameID.started]) {
                // Do end-game stuff
            } else {
                state.games[gameID].removePlayer(userID);
                state.users[userID].inGame = -1;
                gameUpdate(gameID);
                lobbyUpdate();
                sendResponse();
                console.log(state.users[userID].name + " left game " + gameID);
            }
        }
    });

    socket.on("joinGameRoom", gameID => {
        if (userID) {
            socket.join("game" + gameID);
            gameUpdate(gameID);
            console.log(state.users[userID].name + " joined room for game " + gameID);
        }
    });

    socket.on("leaveGameRoom", gameID => {
        if (userID) {
            socket.leave("game" + gameID);
            console.log(state.users[userID].name + " left room for game " + gameID);
        }
    });

    socket.on("anonymize", (sendResponse) => {
        if (userID) {
            state.users[userID].socket = null;
            userID = 0;
            sendResponse();
            console.log("Socket Anonymized");
        }
        
    });

    socket.on("disconnect", () => {
        if (userID) {
            state.users[userID].socket = null;
            userID = 0;
        }
        console.log("Socket Disconnected");
    });
});

async function verifyToken(idToken) {
    const ticket = await gClient.verifyIdToken({ idToken, audience: G_CLIENT_ID });

    const payload = ticket.getPayload();
    const userid = payload['sub'];
    const name = payload['given_name'];

    return {userid, name};
}

  function lobbyUpdate() {
      let payload = [];
    for (let key in state.games) {
        let game = state.games[key];
        let numPlayers = Object.keys(game.players).length
        if (numPlayers < 4 && !game.started) {
            payload.push({id: key, name: "Game " + key, numPlayers});
        }
    }
    socketServer.to("lobby").emit("lobbyUpdate", payload);
    console.log("Sent update for lobby");
}

function gameUpdate(gameID) {
    const game = state.games[gameID];
    let payload = {
        players: game.playerOrder.map((playerID) => {
            return {
                id: playerID,
                numCards: game.players[playerID].hand.length,
                points: game.players[playerID].points,
                name: state.users[playerID].name,
                avatar: state.users[playerID].avatar
            };
        }),
        currentTurn: game.currentTurn
    };
    socketServer.to("game" + gameID).emit("gameUpdate", payload);
    console.log("Sent update for game " + gameID);
}
