import React from "react";
import { withStyles } from "material-ui/styles";
import cardCountStyles from "./styles";
import Card from "material-ui/Card";
import Typography from "material-ui/Typography";


const cardCount = props => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <Typography className={classes.num} variant="headline">{props.num}</Typography>
        </Card>
    );
};

export default withStyles(cardCountStyles, { withTheme: true })(cardCount);