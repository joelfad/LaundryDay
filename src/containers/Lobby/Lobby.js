import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import lobbyStyles from "./styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Game from "../../components/Game/Game";

class Lobby extends Component {
    state = {
    }

    sendNewUserRequest = () => {
        // send some sort of message to the backend
        console.log("Game request submitted");
    }

    render() {
        let dummyData = {
            1: {name: "Game 1", numPlayers: "3"},
            2: {name: "Game 2", numPlayers: "1"},
            3: {name: "Game 3", numPlayers: "2"},
            4: {name: "Game 4", numPlayers: "3"},
            5: {name: "Game 5", numPlayers: "1"},
            6: {name: "Game 6", numPlayers: "2"},
            7: {name: "Game 7", numPlayers: "3"},
            8: {name: "Game 8", numPlayers: "1"},
            9: {name: "Game 9", numPlayers: "2"},
        }

        let games = Object.keys(dummyData).map((id) => {
            return <Game key={id} name={dummyData[id].name} num={dummyData[id].numPlayers}/>;
        });

        const { classes } = this.props;
        return (
            <div className={classes.lobby}>
                <Typography className={classes.title} variant="title">Games</Typography>
                <Paper className={classes.paper}>
                    {games}
                </Paper>
            </div>
        );
    }
}


export default withStyles(lobbyStyles, { withTheme: true })(Lobby);
