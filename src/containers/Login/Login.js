/* global gapi */
import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import loginStyles from "./styles";
import Typography from "material-ui/Typography";

import { withSocket } from "../../context/SocketContext/SocketContext";

class Login extends Component {

    componentDidMount = () => {
        gapi.signin2.render("google-signin-button", {
            scope: "profile",
            longtitle: true,
            height: 45,
            width: 250,
            onsuccess: (googleUser) => {
                console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
                this.props.socket.emit("authenticate", googleUser.getAuthResponse().id_token, (response) => {
                    console.log(response);
                    console.log(this.props.socket);
                    switch (response.goTo) {
                    case "avatar":
                        this.props.history.push("/avatar");
                        break;
                    case "game":
                        this.props.history.push("/game/" + response.id);
                        break;
                    case "home":
                    default:
                        this.props.history.push("/home");
                        break;
                    }
                });
            },
            onfailure: () => { console.log("FAIL") }
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.login}>
                <div>
                    <Typography className={classes.title} variant="title">Laundry Day</Typography>
                    <div className={classes.buttons}>
                        <div className={classes.button} id="google-signin-button"></div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withSocket()(withStyles(loginStyles, { withTheme: true })(Login));
