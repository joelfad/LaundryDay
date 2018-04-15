const newDeck = require("./cards");

class User {
    constructor(id, name, socket) {
        this.id = id;
        this.name = name;
        this.socket = socket;
        this.avatar = -1;
        this.inGame = -1;
    }
};

class Game {
    constructor(id, userID) {
        this.id = id;
        this.players = {[userID]: {hand: [], points: 0}};
        this.playerOrder = [userID];
        this.currentTurn = 0;
        this.creator = userID;
        this.started = false;
        this.deck = newDeck();

        this.addPlayer = (playerID) => {
            this.players[playerID] = { hand: [], points: 0};
            this.playerOrder.push(playerID);
        }

        this.removePlayer = (playerID) => {
            delete this.players[playerID];
            this.playerOrder = this.playerOrder.filter(playerIDElement => playerIDElement !== playerID);
        }
    }
};

module.exports = { User, Game };
