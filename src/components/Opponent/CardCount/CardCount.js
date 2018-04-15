import React from "react";
import { withStyles } from "material-ui/styles";
import cardCountStyles from "./styles";
import Typography from "material-ui/Typography";
import Style from "material-ui-icons/Style";


const cardCount = props => {
    const { classes } = props;
    let leftOffset = "2";
    if (props.numCards >= 10) {
        leftOffset = "1";
    }
    return (
        <div>
            <Style className={[classes.cards, props.selected ? classes.selected : classes.unselected].join(" ")}/>
            <span className={classes.count} style={{marginLeft:"calc(4vw + " + leftOffset +"vw)"}}>
                <Typography className={classes.countText} variant="subheading">{props.numCards}</Typography>
            </span>
        </div>
    );
};

export default withStyles(cardCountStyles, { withTheme: true })(cardCount);
