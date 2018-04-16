import React from "react";
import { withStyles } from "material-ui/styles";
import badgeRed from "./img/badge_red.png";
import badgePurple from "./img/badge_purple.png";
import myPointsStyles from "./styles";
import Typography from "material-ui/Typography";


const myPoints = props => {
    const { classes } = props;
        
    return (
        <div className={classes.badge} style={{backgroundImage: "url(" + (props.turn ? badgePurple : badgeRed) + ")"}}>
            <Typography className={classes.count} variant="title">{props.points}</Typography>
            <Typography className={classes.points} variant="headline">POINTS</Typography>
        </div>
    );
};

export default withStyles(myPointsStyles, { withTheme: true })(myPoints);
