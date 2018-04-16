import React, { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";

import { withAuth } from "../../context/AuthContext/AuthContext";
import { withSocket } from "../../context/SocketContext/SocketContext";
import Game from "../../components/Game/Game";

import lobbyStyles from "./styles";


class Lobby extends Component {
    state = {
        games: []
    }

    componentDidMount() {
        this.props.socket.emit("joinLobby");

        this.props.socket.on("lobbyUpdate", payload => {
            console.log("Got lobby update:", payload);
            this.setState({games: payload});
        });
    }

    componentWillUnmount() {
        this.props.socket.emit("leaveLobby");

        this.props.socket.removeAllListeners();
    }

    newGameHandler = () => {
        this.props.socket.emit("createGame", gameID => {
            this.props.history.push("/game/" + gameID);
        });
    }

    joinGameHandler = gameID => () => {
        this.props.socket.emit("joinGame", gameID, () => {
            this.props.history.push("/game/" + gameID);
        });
    }

    render() {
        const { classes } = this.props;
        let games = this.state.games.map(game => {
            return <Game
                        key={game.id}
                        name={game.name}
                        num={game.numPlayers}
                        joinGameHandler={this.joinGameHandler(game.id)}
                    />;
        });
        if (games.length === 0) {
            games = <Typography className={classes.noGames} variant="subheading">There are no games available, please create one.</Typography>;
        }
        return (
            <Fragment>
                <Button className={classes.home} onClick={() => this.props.history.push("/")}>Home</Button>
                <div className={classes.lobby}>
                    <Typography className={classes.title} variant="title">Games</Typography>
                    <Paper className={classes.paper}>
                        {games}
                    </Paper>
                    <Button className={classes.newGame} variant="fab" size="medium" color="secondary" onClick={this.newGameHandler}><AddIcon/></Button>
                </div>
            </Fragment>
        );
    }
}


export default withSocket()(withAuth()(withStyles(lobbyStyles, { withTheme: true })(Lobby)));
