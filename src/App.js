import React, { Component } from 'react';
import './App.css';
import Login from "./containers/Login/Login";
import Login2 from "./containers/Login/Login/Login";
import NewUser from "./containers/Login/NewUser/NewUser";
import Home from "./components/Home/Home";
import Lobby from "./containers/Lobby/Lobby";
import GameLobby from "./containers/GameLobby/GameLobby";
import EndPage from "./components/EndPage/EndPage";
import AvatarSelection from "./containers/AvatarSelection/AvatarSelection";
import Playing from "./containers/Playing/Playing";
import theme from "./components/material-ui/theme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      {/* <NewUser/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <Login2/>} */}
      {/* <Lobby/> */}
      {/* <GameLobby creator={false} name="Game 1"/> */}      
      {/* <EndPage win={true}/> */}
      {/* <AvatarSelection/> */}
      <Playing/>
      </MuiThemeProvider>
    );
  }
}

export default App;
