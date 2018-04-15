import React, { Component } from "react";

import GameLobby from "../../components/GameLobby/GameLobby";
import { withAuth } from "../../context/AuthContext/AuthContext";
import { withSocket } from "../../context/SocketContext/SocketContext";

class GameContainer extends Component {
    state = {
        players: [],
        currentTurn: 0,
        gameStarted: false,
        gameOver: false,
        thisPlayer: 1234
    }

    componentDidMount() {
        let thisPlayer = this.props.gAuth.currentUser.get().getId();
        this.setState({thisPlayer});

        this.props.socket.on("gameUpdate", payload => {
            console.log(payload);
            this.setState(payload);
        });

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

    render() {
        if (this.state.gameStarted) {

        } else {
            return <GameLobby handleCloseGame={this.handleCloseGame}/>
        }
    }
}


export default withSocket()(withAuth()(GameContainer));
