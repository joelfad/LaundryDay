import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import Avatar from "../../components/Avatar/Avatar";
import { withAuth } from "../../context/AuthContext/AuthContext";
import { withSocket } from "../../context/SocketContext/SocketContext";

import avatarSelectionStyles from "./styles";

class AvatarSelection extends Component {
    state = {
        selected: -1
    }

    selectedHandler = (index) => () => {
        this.setState({selected: index});
    }

    setAvatarHandler = () => {
        this.props.socket.emit("setAvatar", this.state.selected, () => {
            this.props.history.push("/home");
        });
    }

    render() {
        const { classes } = this.props;
        const avatarList = [];
        for (let i = 0; i < 6; i++) {
            avatarList.push(<Avatar key={i} index={i} large selected={this.state.selected === i} clicked={this.selectedHandler(i)}/>);
        }
        return (
            <div className={classes.avatarSelection}>
                <Typography className={classes.title} variant="title">Select an Avatar</Typography>
                <Paper className={classes.paper}>
                    {avatarList}
                </Paper>
                <div className={classes.buttons}>
                    <Button className={classes.button} onClick={this.setAvatarHandler}>Set Avatar</Button>
                </div>
            </div>
        );
    }
}


export default withSocket()(withAuth()(withStyles(avatarSelectionStyles, { withTheme: true })(AvatarSelection)));
