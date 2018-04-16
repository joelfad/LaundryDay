import React from "react";
import { withStyles } from "material-ui/styles";
import myCardStyles from "./styles";
import Card from "material-ui/Card";
import Typography from "material-ui/Typography";
import laundry from "./laundryIcons";


const myCard = props => {
    const { classes } = props;
    return (
        <Card className={[classes.card, props.selected ? classes.selected : ""].join(' ')} onClick={props.clicked}>
            <img className={classes.icon} src={laundry[props.card.id]} alt=""/>
            <Typography className={classes.num} variant="title">{props.card.name}</Typography>
        </Card>
    );
};

export default withStyles(myCardStyles, { withTheme: true })(myCard);
