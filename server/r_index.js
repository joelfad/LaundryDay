const express = require("express");
const path = require("path");
const crypto = require("crypto");
const http = require("http");
const socketio = require("socket.io");
const { OAuth2Client } = require("google-auth-library");

const { user } = require("./classes");

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
    games: []
};

socketServer.on("connection", socket => {
    console.log("Anonymous Socket Connected!");
    let userID; // This is the userToken for the user related to THIS socket

    socket.on("authenticate", (userToken, sendResponse) => {
        console.log("Got authenticate event")
        verifyToken(userToken).then(userData => {
            userID = userData.userid;
            if (state.users[userID]) {
                console.log("User was here before");
                state.users[userID].socket = socket;
                if (state.users[userID].avatar === -1) {
                    sendResponse({goTo: "avatar"});
                } // else if (user is in game) goTo game, id x
                else {
                    sendResponse({goTo: "home"});
                }
            } else {
                console.log("User was not here before, make new 'account'");
                state.users[userID] = new user(userID, userData.name);
                sendResponse({goTo: "avatar"});
            }
            console.log("Got user:", userData);
        }).catch(error => {
            console.log("Bad things happened:", error);
        });
    });

    socket.on("setAvatar", (avatarIndex, sendResponse) => {
        state.users[userID].avatar = avatarIndex;
        sendResponse();
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
