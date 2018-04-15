import React from "react";
import { withStyles } from "material-ui/styles";
import opponentPointsStyles from "./styles";
import Typography from "material-ui/Typography";


const opponentPoints = props => {
    const { classes } = props;
    return (
        <div className={classes.badge}>
            <Typography className={classes.count} variant="title">{props.points}</Typography>
        </div>
    );
};

export default withStyles(opponentPointsStyles, { withTheme: true })(opponentPoints);
