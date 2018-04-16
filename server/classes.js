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
            if (this.players[userID] && Object.keys(this.players).length < 4) {
                this.players[playerID] = { hand: [], points: 0};
                this.playerOrder.push(playerID);
                return true;
            } else {
                return false;
            }
        }

        this.removePlayer = (playerID) => {
            delete this.players[playerID];
            this.playerOrder = this.playerOrder.filter(playerIDElement => playerIDElement !== playerID);
        }

        this.deal = () => {
            for (let i = 0; i < 7; i++) {
                this.playerOrder.forEach(playerID => {
                    this.addCardToHand(playerID, this.deck.pop());
                });
            }
        }

        this.askForCard = (askerID, responderID, cardID) => {
            let responder = this.players[responderID];

            let responderIndex = responder.hand.findIndex(cardInHand => {
                return cardInHand.id === cardID;
            });

            if (responderIndex !== -1) {
                this.addCardToHand(askerID, responder.hand.splice(responderIndex, 1)[0]);
                return true;
            } else {
                return false;
            }
        }

        this.addCardToHand = (playerID, card) => {
            let player = this.players[playerID];

            let matchIndex = player.hand.findIndex(cardInHand => {
                return cardInHand.id === card.id;
            });
            if (matchIndex === -1) {
                player.hand.push(card);
            } else {
                player.hand.splice(matchIndex, 1);
                player.points++;
            }
        }

        this.goFish = playerID => {
            if (this.deck.length === 0) {
                return false;
            } else {
                this.addCardToHand(playerID, this.deck.pop());
                return true;
            }
        }

        this.nextTurn = () => {
            this.currentTurn++;
            if (this.currentTurn > (this.playerOrder.length - 1)) {
                this.currentTurn = 0;
            }
        }

        this.findWinner = () => {
            let winner = {id: 1234, points: -1};
            this.playerOrder.forEach(playerID => {
                if (this.players[playerID].points > winner.points) {
                    winner = {id: playerID, points: this.players[playerID]};
                }
            });
            // check for tie:
            let winners = [winner.id];
            let losers = [];
            this.playerOrder.forEach(playerID => {
                if (this.players[playerID].points === winner.points) {
                    winners.push(playerID);
                } else {
                    losers.push(playerID);
                }
            });

            return {winners, losers};
        }
    }
};

module.exports = { User, Game };
