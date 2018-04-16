import React from "react";
import { withStyles } from "material-ui/styles";
import endStyles from "./styles";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const EndPage = props => {
        const { classes } = props;
        let endTitle = null;
        switch (props.result){
            case "win":
                endTitle = "You win!";
                break;
            case "lose":
                endTitle = "You lose!";
                break;
            case "cancelled":
                endTitle = "Game cancelled!";
                break;
            case "tie":
                endTitle = "You tied!";
                break;
            default:
                endTitle = "Game over!" 
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
                <Button className={classes.button} variant="raised" onClick={() => props.history.push("/home")}>Start again</Button>
            </div>
        );
}


export default withStyles(endStyles, { withTheme: true })(EndPage);
