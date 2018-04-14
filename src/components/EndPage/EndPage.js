import React from "react";
import { withStyles } from "material-ui/styles";
import endStyles from "./styles";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const EndPage = props => {
        const { classes } = props;
        let endTitle = null;
        if (props.win) {
            endTitle = "You win!"
        } else {
            endTitle = "You lose!"
        }
        return (
            <div className={classes.endPage}>
                <Typography className={classes.title} variant="title">{endTitle}</Typography>
                <div className={classes.textWrapper}>
                <div className={classes.text}>
                <Typography className={classes.content} variant="title">Made by Marissa Baden, Michael Geeraert, Taylor LaRiviere, Nicole Loison, Joel McFadden, and Rowan Moul.</Typography>
                <br/>
                <Typography className={classes.content} variant="title">Icons made by Freepik, Twitter, Smashicons, Roundicons, monkik and Pixel Buddha from www.flaticon.com</Typography>
                </div>
                </div>
                <div className={classes.grow} />
                <Button className={classes.button} variant="raised">Start again</Button>
            </div>
        );
}


export default withStyles(endStyles, { withTheme: true })(EndPage);
