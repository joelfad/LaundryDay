import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import playingStyles from "./styles";
import Me from "../../components/Me/Me";
import MyPoints from "../../components/MyPoints/MyPoints";
import Opponent from "../../components/Opponent/Opponent";
import MyCard from "../../components/MyCard/MyCard";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import ExitToApp from "material-ui-icons/ExitToApp";

class Playing extends Component {
    state = {
        opponentSelected: -1,
        cardSelected: -1,
        card: "null",
        open: false,
        me: {
            name: "Marissa",
            avatar: "3",
            cards: [
                {id: 2, name: "sock", selected: false},
                {id: 1, name: "mitten", selected: false},
                {id: 0, name: "shoe", selected: false}
            ],
            points: 12
        },
        opponents: [
            {name: "Bob", avatar: "2", selected: false, cards: 12, points: 8},
            {name: "Joanna", avatar: "5", selected: false, cards: 5, points: 2},
            {name: "Sally", avatar: "4", selected: false, cards: 8, points: 7}
        ]
    };

    selectedOpponentHandler = (index) => {
        this.setState({opponentSelected: index});
    }

    selectedCardHandler = (index) => {
        this.setState({cardSelected: index});
    }

    askHandler = () => {
        
    }

    quitGameHandler = () => {

    }

    render() {
        const { classes } = this.props;
        let dummyCards = [ {id: 1, name: "sock"}, {id: 2, name: "mitten"}, {id: 3, name: "boot"}];
        let menuItems = dummyCards.map((card) => {
            return <MenuItem key={card.id} value={card.id}>{card.name}</MenuItem>;
        });

        const opponents = [];
        for (let i = 0; i < this.state.opponents.length; i++) {
            opponents.push(
                <Opponent
                    key={i} 
                    clicked={() => this.selectedOpponentHandler(i)}
                    name={this.state.opponents[i].name} 
                    avatar={this.state.opponents[i].avatar} 
                    selected={this.state.opponentSelected === i}
                    cards={this.state.opponents[i].cards}
                    points={this.state.opponents[i].points}
                />
            );
        }

        let message = (
            <div className={classes.messageBox}>
                <div className={classes.message}>
                    "Bob, do you have a sweater?" - Marissa
                </div>
            </div>
        );

        const myCards = [];
        for (let i = 0; i < this.state.me.cards.length; i++) {
            myCards.push(
                <MyCard
                    key={i}
                    clicked={() => this.selectedCardHandler(i)}
                    card={this.state.me.cards[i]}
                    selected={this.state.cardSelected === i}
                />
            );
        }

        return (
            <div className={classes.playing}>
                <Typography className={classes.title} variant="title">Laundry Day</Typography>
                <ExitToApp className={classes.quitButton}/>
                <Paper className={classes.paper}>
                <div className={classes.opponents}>
                    {opponents}
                </div>
                    {message}
                <div className={classes.cards}>
                    {myCards}
                </div>
                <div className={classes.meArea}>
                    <MyPoints points={this.state.me.points}/>
                    <Me name={this.state.me.name} avatar={this.state.me.avatar}/>
                    <Button className={classes.button}>Ask</Button>
                </div>
                </Paper>
            </div>
        );
    }
}


export default withStyles(playingStyles, { withTheme: true })(Playing);
