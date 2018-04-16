import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import playingStyles from "./styles";
import ThisPlayer from "../../components/ThisPlayer/ThisPlayer";
import MyPoints from "../../components/MyPoints/MyPoints";
import Opponent from "../../components/Opponent/Opponent";
import MyCard from "../../components/MyCard/MyCard";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from 'material-ui/Button';
import ExitToApp from "material-ui-icons/ExitToApp";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

class Playing extends Component {
    state = {
        confirmQuit: false
    };

    confirmQuitOpen = () => {
        this.setState({confirmQuit: true});
    }

    confirmQuitClose = () => {
        this.setState({confirmQuit: false});
    }

    thisPlayer = () => this.props.players[this.props.players.length - 1];

    render() {
        const { classes } = this.props;

        const opponents = [];
        // all players except the last one are opponents
        for (let i = 0; i < this.props.players.length - 1; i++) {
            opponents.push(
                <Opponent
                    key={i} 
                    clicked={() => this.props.selectOpponentHandler(i)}
                    player={this.props.players[i]}
                    selected={this.props.selectedOpponent === i}
                />
            );
        }

        let message = (
            <div className={classes.messageBox}>
                <div className={classes.message}>
                    {this.props.message}
                </div>
            </div>
        );

        const myCards = [];
        for (let i = 0; i < this.props.cards.length; i++) {
            myCards.push(
                <MyCard
                    key={i}
                    clicked={() => this.props.selectCardHandler(i)}
                    card={this.props.cards[i]}
                    selected={this.props.selectedCard === i}
                />
            );
        }

        return (
            <div className={classes.playing}>
                <Typography className={classes.title} variant="title">Laundry Day</Typography>
                <ConfirmDialog
                    title="Are you sure you want to end the game?"
                    text="Clicking 'YES' will end the game for all players."
                    action={this.props.leaveHandler}
                >
                    <ExitToApp className={classes.quitButton}/>
                </ConfirmDialog>
                <Paper className={classes.paper}>
                <div className={classes.opponents}>
                    {opponents}
                </div>
                    {message}
                <div className={classes.cards}>
                    {myCards}
                </div>
                <div className={classes.thisPlayerArea}>
                    <div className={classes.grow}>
                        <MyPoints points={this.thisPlayer().points}/>
                    </div>
                    <ThisPlayer player={this.thisPlayer()}/>
                    <div className={classes.grow}>
                        <Button
                            className={[classes.button, this.props.askHandler ? classes.enableAsk : classes.disableAsk].join(" ")}
                            onClick={this.props.askHandler}
                        >
                            Ask
                        </Button>
                    </div>
                </div>
                </Paper>
            </div>
        );
    }
}


// export default withSocket()(withAuth()(withStyles(playingStyles, { withTheme: true })(Playing)));
export default withStyles(playingStyles, { withTheme: true })(Playing);
