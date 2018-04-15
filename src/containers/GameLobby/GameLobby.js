import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import gameLobbyStyles from "./styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Player from "../../components/Player/Player";

import { withAuth } from "../../context/AuthContext/AuthContext";
import { withSocket } from "../../context/SocketContext/SocketContext";

class GameLobby extends Component {
    state = {
    }

    handleCloseGame = () => {
        this.props.socket.emit("deleteGame", this.props.match.params.id, () => {
            this.props.history.push("/lobby");
        });
    }

    render() {
        const { classes } = this.props;
        
        let gameCreator = true;//this.props.creator;
        let buttons = null;

        if (gameCreator) {
            buttons = (
            <div className={classes.buttons}>
                <Button className={classes.button} variant="raised" onClick={this.handleCloseGame}>Close Lobby</Button>
                <Button className={classes.button} variant="raised">Start Game</Button>
            </div>
            );
        } else {
            buttons = (
                <div className={classes.buttons}>
                    <Button className={classes.button} variant="raised">Exit Lobby</Button>
                </div>
            );
        }
        let dummyData = {
            1: {name: "Player 1", avatar: "3"},
            2: {name: "Player 2", avatar: "2"},
            3: {name: "Player 3", avatar: "1"},
        }

        let games = Object.keys(dummyData).map((id) => {
            return <Player key={id} name={dummyData[id].name} avatar={dummyData[id].avatar}/>
        });

        return (
            <div className={classes.lobby}>
                <Typography className={classes.title} variant="title">{this.props.name}</Typography>
                <Paper className={classes.paper}>
                    {games}
                </Paper>
                <div className={classes.grow}></div>
                { buttons }
            </div>
        );
    }
}


export default withSocket()(withAuth()(withStyles(gameLobbyStyles, { withTheme: true })(GameLobby)));
