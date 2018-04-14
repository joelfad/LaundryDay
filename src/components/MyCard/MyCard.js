import React from "react";
import { withStyles } from "material-ui/styles";
import myCardStyles from "./styles";
import Card from "material-ui/Card";
import Typography from "material-ui/Typography";
import laundry from "./laundryIcons";


const myCard = props => {
    const { classes } = props;
    return (
        <Card className={[classes.card, classes.selected].join(' ')}>
            <img className={classes.icon} style={null} src={laundry[1]} alt=""/>
            <Typography className={classes.num} variant="title">{props.card}</Typography>
        </Card>
    );
};

export default withStyles(myCardStyles, { withTheme: true })(myCard);
