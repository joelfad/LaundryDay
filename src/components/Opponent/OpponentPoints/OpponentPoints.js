import React from "react";
import { withStyles } from "material-ui/styles";
import opponentPointsStyles from "./styles";
import Typography from "material-ui/Typography";
import badgeRed from "../../MyPoints/img/badge_red.png";
import badgePurple from "../../MyPoints/img/badge_purple.png";


const opponentPoints = props => {
    const { classes } = props;
    return (
        <div className={classes.badge} style={{backgroundImage: "url(" + (props.turn ? badgePurple : badgeRed) + ")"}}>
            <Typography className={classes.count} variant="title">{props.points}</Typography>
        </div>
    );
};

export default withStyles(opponentPointsStyles, { withTheme: true })(opponentPoints);
