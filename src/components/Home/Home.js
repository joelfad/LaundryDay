import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import homeStyles from "./styles";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.login}>
                <div>
                <Typography className={classes.title} variant="title">Laundry Day</Typography>
                <div className={classes.buttons}>
                    <Button className={classes.button} variant="raised">Join a Game</Button>
                    <Button className={classes.button} variant="raised">Start a New Game</Button>
                </div>
                </div>
            </div>
        );
    }
}


export default withStyles(homeStyles, { withTheme: true })(Home);
