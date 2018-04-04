import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import loginStyles from "./styles";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

class Login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.login}>
                <div>
                <Typography className={classes.title} variant="title">Laundry Day</Typography>
                <div className={classes.buttons}>
                    <Button className={classes.button} variant="raised">Log in</Button>
                    <Button className={classes.button} variant="raised">New user</Button>
                </div>
                </div>
            </div>
        );
    }
}


export default withStyles(loginStyles, { withTheme: true })(Login);
