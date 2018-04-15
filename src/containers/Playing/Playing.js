import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
// import { withAuth } from "../../context/AuthContext/AuthContext";
// import { withSocket } from "../../context/SocketContext/SocketContext";
import playingStyles from "./styles";
import Me from "../../components/Me/Me";
import MyPoints from "../../components/MyPoints/MyPoints";
import Opponent from "../../components/Opponent/Opponent";
import MyCard from "../../components/MyCard/MyCard";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from 'material-ui/Button';
import ExitToApp from "material-ui-icons/ExitToApp";
import SkipNext from "material-ui-icons/SkipNext";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

class Playing extends Component {
    state = {
        opponentSelected: null,
        cardSelected: null,
        playersTurn: -1,
        myID: 3, // set by componentDidMount - this is who "you" are
        me: { id: 3, name: "Marissa", avatar: "3", numCards: 3, points: 12},
        cards: [
            {id: 2, name: "sock", selected: false},
            {id: 1, name: "mitten", selected: false},
            {id: 0, name: "shoe", selected: false}
        ],
        opponents: [
            {id: 0, name: "Bob", avatar: "2", selected: false, numCards: 12, points: 8},
            {id: 1, name: "Joanna", avatar: "5", selected: false, numCards: 5, points: 2},
            {id: 2, name: "Sally", avatar: "4", selected: false, numCards: 8, points: 7},
        ],
        message: "\"Bob, do you have a sweater?\" - Marissa",
        confirmQuit: false
    };

    confirmQuitOpen = () => {
        this.setState({confirmQuit: true});
    }

    confirmQuitClose = () => {
        this.setState({confirmQuit: false});
    }

    isMyTurn = () => this.state.playersTurn === this.state.myID;

    canAsk = () => this.isMyTurn() && this.state.opponentSelected !== null && this.state.cardSelected !== null;

    clearSelections = () => {
        this.setState({
            opponentSelected: null,
            cardSelected: null,
        });
    }

    selectedOpponentHandler = (index) => {
        this.isMyTurn() && this.setState({opponentSelected: index});
    }

    selectedCardHandler = (index) => {
        this.isMyTurn() && this.setState({cardSelected: index});
    }

    askHandler = () => {
        if (this.canAsk()) {

            let request = {
                myID: this.state.myID,
                cardID: this.state.cardSelected,
                opponentID: this.state.opponentSelected
            }

            // TODO: send "ask" request to server
            console.log("Sending request: ", request);  // DEBUG

            this.clearSelections();
            this.debugNextTurn(); // DEBUG
        }
    }

    quitGameHandler = () => {
        // TODO
        console.log("Sending quit game event...");  // DEBUG
    }

    debugNextTurn = () => {
        // DEBUG
        let currentPlayer = this.state.playersTurn;
        let numberOfPlayers = this.state.opponents.length + 1;
        this.setState({playersTurn: (currentPlayer + 1) % numberOfPlayers})
        this.clearSelections();
    }

    // componentDidMount() {
    //     this.setState({myID: this.props.gAuth.currentUser.get().getId()});
    // }

    render() {
        const { classes } = this.props;

        console.log("Player #" + this.state.playersTurn + "'s turn.");  // DEBUG

        const opponents = [];
        for (let i = 0; i < this.state.opponents.length; i++) {
            opponents.push(
                <Opponent
                    key={i} 
                    clicked={() => this.selectedOpponentHandler(i)}
                    name={this.state.opponents[i].name} 
                    avatar={this.state.opponents[i].avatar} 
                    selected={this.state.opponentSelected === i}
                    turn={this.state.playersTurn === this.state.opponents[i].id}
                    numCards={this.state.opponents[i].numCards}
                    points={this.state.opponents[i].points}
                />
            );
        }

        let message = (
            <div className={classes.messageBox}>
                <div className={classes.message}>
                    {this.state.message}
                </div>
            </div>
        );

        const myCards = [];
        for (let i = 0; i < this.state.cards.length; i++) {
            myCards.push(
                <MyCard
                    key={i}
                    clicked={() => this.selectedCardHandler(i)}
                    card={this.state.cards[i]}
                    selected={this.state.cardSelected === i}
                />
            );
        }

        return (
            <div className={classes.playing}>
                <Typography className={classes.title} variant="title">Laundry Day</Typography>
                <SkipNext className={classes.debugNextTurnButton} onClick={this.debugNextTurn}/>
                <ConfirmDialog
                    title="Are you sure you want to end the game?"
                    text="Clicking 'YES' will end the game for all players."
                    action={this.quitGameHandler}
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
                <div className={classes.meArea}>
                    <div className={classes.grow}>
                    <MyPoints points={this.state.me.points}/>
                    </div>
                    <Me name={this.state.me.name} avatar={this.state.me.avatar} turn={this.isMyTurn()}/>
                    <div className={classes.grow}>
                    <Button
                        className={[classes.button, this.canAsk() ? classes.enableAsk : classes.disableAsk].join(" ")}
                        onClick={this.askHandler}
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
