import React from "react";
import { withStyles } from "material-ui/styles";
import myCardStyles from "./styles";
import Card from "material-ui/Card";
import Typography from "material-ui/Typography";


const myCard = props => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <Typography className={classes.num} variant="title">{props.card}</Typography>
        </Card>
    );
};

export default withStyles(myCardStyles, { withTheme: true })(myCard);