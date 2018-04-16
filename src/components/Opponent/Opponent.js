import React from "react";
import { withStyles } from "material-ui/styles";
import opponentStyles from "./styles";
import Typography from "material-ui/Typography";
import Avatar from "../Avatar/Avatar";
import CardCount from "../Opponent/CardCount/CardCount";
import OpponentPoints from "./OpponentPoints/OpponentPoints";

const opponent = props => {
    let { classes } = props;
    return (
        <div className={classes.thisPlayer} onClick={props.clicked}>
            <div>
                <Typography className={classes.name} variant="headline">{props.player.name}</Typography>
            </div>
            <div className={classes.newrow}>
            <Avatar index={props.player.avatar} large selected={props.player.selected} turn={props.player.turn}/>
                <div className={classes.nums}>
                <OpponentPoints points={props.player.points}/>
                <CardCount numCards={props.player.numCards} selected={props.selected}/>
                </div>
            </div>
        </div>
    );
};

export default withStyles(opponentStyles, { withTheme: true })(opponent);
