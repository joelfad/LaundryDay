import React, { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import homeStyles from "./styles";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

import { withAuth } from "../../context/AuthContext/AuthContext";
import { withSocket } from "../../context/SocketContext/SocketContext";

class Home extends Component {
    logoutHandler = () => {
        this.props.gAuth.signOut().then(() => {
            this.props.socket.emit("anonymize", () => {
                // console.log("socket anon");
                this.props.history.push("/");
            });
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Button className={classes.logout} onClick={this.logoutHandler}>Logout</Button>
                <div className={classes.background}>
                    <div>
                        <Typography className={classes.title} variant="title">Laundry Day</Typography>
                        <div className={classes.buttons}>
                            <Button className={classes.button} variant="raised">Join a Game</Button>
                            <Button className={classes.button} variant="raised">Start a New Game</Button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default withSocket()(withAuth()(withStyles(homeStyles, { withTheme: true })(Home)));
