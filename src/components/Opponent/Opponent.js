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
        <Avatar id={props.avatar} large selected={props.selected} clicked={props.clicked}/>
        <Typography className={classes.name} variant="title">{props.points} points</Typography>
        <CardCount num={props.cards}/>
        </div>
    );
};

export default withStyles(opponentStyles, { withTheme: true })(opponent);
