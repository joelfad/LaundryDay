import React from "react";
import { withStyles } from "material-ui/styles";
import gameLobbyStyles from "./styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import Player from "../Player/Player";

const gameLobby = props => {
        const { classes } = props;
        
        let buttons = null;

        if (props.creator) {
            buttons = (
                <div className={classes.buttons}>
                    <Button className={classes.button} variant="raised" onClick={props.handleCloseGame}>Close Lobby</Button>
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

        let players = props.players.map(player => {
            return <Player key={player.id} name={player.name} avatar={player.avatar}/>;
        });

        return (
            <div className={classes.lobby}>
                <Typography className={classes.title} variant="title">{props.name}</Typography>
                <Paper className={classes.paper}>
                    {players}
                </Paper>
                <div className={classes.grow}></div>
                { buttons }
            </div>
        );
}

export default withStyles(gameLobbyStyles, {withTheme: true})(gameLobby);
