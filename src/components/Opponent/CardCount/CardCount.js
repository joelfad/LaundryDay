import React from "react";
import { withStyles } from "material-ui/styles";
import cardCountStyles from "./styles";
import Typography from "material-ui/Typography";
import Style from "material-ui-icons/Style";


const cardCount = props => {
    const { classes } = props;
    let leftOffset = "6px";
    if (props.num >= 10) {
        leftOffset = "0px";
    }
    return (
        <div>
            <Style className={classes.cards}/>
            <span className={classes.count} style={{marginLeft:"calc(21px + " + leftOffset + ")"}}>
                <Typography className={classes.countText} variant="headline">{props.num}</Typography>
            </span>
        </div>
    );
};

export default withStyles(cardCountStyles, { withTheme: true })(cardCount);
