import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import theme from "./components/material-ui/theme";

import Login from "./containers/Login/Login";
import Home from "./components/Home/Home";
import Lobby from "./containers/Lobby/Lobby";
import GameContainer from "./containers/GameContainer/GameContainer";
import AvatarSelection from "./containers/AvatarSelection/AvatarSelection";
import { SocketProvider } from "./context/SocketContext/SocketContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";


class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <SocketProvider>
                    <AuthProvider>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/avatar" component={AvatarSelection}/>
                                <Route path="/home" component={Home}/>
                                <Route path="/lobby" component={Lobby}/>
                                <Route path="/game/:id" component={GameContainer}/>
                                <Route path="/" component={Login}/>
                            </Switch>
                        </BrowserRouter>
                    </AuthProvider>
                </SocketProvider>
            </MuiThemeProvider>
        );
    }
}

export default App;
