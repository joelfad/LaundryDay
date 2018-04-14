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
        this.started = false;
        this.deck = newDeck();
    }
};

module.exports = { User, Game };
