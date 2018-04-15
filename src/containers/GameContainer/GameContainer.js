import React, { Component } from "react";

import GameLobby from "../../components/GameLobby/GameLobby";
import Playing from "../Playing/Playing";
import EndPage from "../../components/EndPage/EndPage";
import { withAuth } from "../../context/AuthContext/AuthContext";
import { withSocket } from "../../context/SocketContext/SocketContext";

class GameContainer extends Component {
    state = {
        players: [],
        currentTurn: 0,
        creator: 123,
        gameStarted: false,
        gameOver: false,
        thisPlayerID: 1234,
        thisPlayerHand: [],
        message: ""
    }

    componentDidMount() {
        let thisPlayerID = this.props.gAuth.currentUser.get().getId();

        this.props.socket.on("gameUpdate", payload => {
            console.log("Got game update:", payload);
            this.setState(payload);
        });

        this.props.socket.on("handUpdate", payload => {
            this.setState({thisPlayerHand: payload});
        });

        this.props.socket.on("messageUpdate", payload => {
            this.setState({message: payload});
        });

        this.props.socket.on("gameStart", () => {
            this.setState({gameStarted: true});
        });

        this.props.socket.on("gameOver", () => {
            this.setState({gameOver: true});
        });

        this.setState({thisPlayerID});
        this.props.socket.emit("joinGameRoom", this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.socket.emit("leaveGameRoom");

        this.props.socket.removeAllListeners();
    }

    handleCloseGame = () => {
        this.props.socket.emit("deleteGame", this.props.match.params.id, () => {
            this.props.history.push("/lobby");
        });
    }

    handleLeaveGame = () => {
        this.props.socket.emit("leaveGame", this.props.match.params.id, () => {
            this.props.history.push("/lobby");
        });
    }

    render() {
        if (this.state.gameStarted) {
            if (this.state.gameOver) {
                return <EndPage />;
            } else {
                return <Playing />;
            }
        } else {
            return <GameLobby
                        creator={this.state.thisPlayerID === this.state.creator}
                        players={this.state.players}
                        handleCloseGame={this.handleCloseGame}
                        handleLeaveGame={this.handleLeaveGame}
                    />
        }
    }
}


export default withSocket()(withAuth()(GameContainer));
