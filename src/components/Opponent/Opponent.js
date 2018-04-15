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
        <div className={classes.me} onClick={props.clicked}>
            <div>
                <Typography className={classes.name} variant="headline">{props.name}</Typography>
            </div>
            <div className={classes.newrow}>
            <Avatar index={props.avatar} large selected={props.selected} turn={props.turn}/>
            <div className={classes.nums}>
            <OpponentPoints points={props.points}/>
            <CardCount numCards={props.numCards} selected={props.selected}/>
            </div>
            </div>
        </div>
    );
};

export default withStyles(opponentStyles, { withTheme: true })(opponent);
