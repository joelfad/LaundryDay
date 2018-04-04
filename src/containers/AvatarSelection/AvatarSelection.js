import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import avatarSelectionStyles from "./styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Avatar from "../../components/Avatar/Avatar";

class AvatarSelection extends Component {
    state = {
        1: {selected: false},
        2: {selected: false},
        3: {selected: false},
        4: {selected: false},
        5: {selected: false},
        6: {selected: false}
    }

    selectedHandler = (prop) => {
        Object.keys(this.state).forEach((key) => {
            this.setState({[key]: {selected: false}});
        })
        this.setState({[prop]: {selected: true}});
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.avatarSelection}>
                <Typography className={classes.title} variant="title">Select an Avatar</Typography>
                <Paper className={classes.paper}>
                    <Avatar id="1" large selected={this.state["1"].selected} clicked={() => this.selectedHandler("1")}/>
                    <Avatar id="2" large selected={this.state["2"].selected} clicked={() => this.selectedHandler("2")}/>
                    <Avatar id="3" large selected={this.state["3"].selected} clicked={() => this.selectedHandler("3")}/>
                    <Avatar id="4" large selected={this.state["4"].selected} clicked={() => this.selectedHandler("4")}/>
                    <Avatar id="5" large selected={this.state["5"].selected} clicked={() => this.selectedHandler("5")}/>
                    <Avatar id="6" large selected={this.state["6"].selected} clicked={() => this.selectedHandler("6")}/>
                </Paper>
                <div className={classes.buttons}>
                    <Button className={classes.button}>Back</Button>
                    <Button className={classes.button}>Next</Button>
                </div>
            </div>
        );
    }
}


export default withStyles(avatarSelectionStyles, { withTheme: true })(AvatarSelection);
