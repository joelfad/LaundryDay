import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import loginStyles from "./styles";
import Typography from "material-ui/Typography";

class Login extends Component {

    /* eslint-disable no-undef */
    componentDidMount = () => {
        let auth;
        gapi.load("auth2", () => {
            auth = gapi.auth2.init();
        });
        gapi.signin2.render("google-signin-button", {
            scope: "profile email",
            longtitle: true,
            height: 50,
            width: 250,
            onsuccess: (googleUser) => {
                console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
            },
            onfailure: () => { console.log("FAIL") }
        });
        this.setState({auth});
    }
    /* eslint-enable no-undef */

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.login}>
                <div>
                <Typography className={classes.title} variant="title">Laundry Day</Typography>
                <div className={classes.buttons}>
                    <div id="google-signin-button"></div>
                </div>
                </div>
            </div>
        );
    }
}


export default withStyles(loginStyles, { withTheme: true })(Login);
