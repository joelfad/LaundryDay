import React from "react";
import { withStyles } from "material-ui/styles";
import opponentStyles from "./styles";
import Typography from "material-ui/Typography";
import Avatar from "../Avatar/Avatar";
import CardCount from "../Opponent/CardCount/CardCount";

const opponent = props => {
    let { classes } = props;
    return (
        <div className={classes.me}>
            <div>
                <Typography className={classes.name} variant="headline">{props.name}</Typography>
            </div>
            <Avatar index={props.avatar} large selected={props.selected} turn={props.turn} clicked={props.clicked}/>
            <Typography className={classes.name} variant="title">{props.points} points</Typography>
            <CardCount numCards={props.numCards} selected={props.selected}/>
        </div>
    );
};

export default withStyles(opponentStyles, { withTheme: true })(opponent);
