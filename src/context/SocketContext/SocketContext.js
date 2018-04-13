import React, { Component } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

class SocketProvider extends Component {
    state = {
        socket: io("localhost:3001"),
        authenticated: false
    }

    updateAuthStatus = status => {
        this.setState({authenticated: status});
    }

    render() {
        return (
            <SocketContext.Provider value={{...this.state, updateAuthStatus: this.updateAuthStatus}}>
                {this.props.children}
            </SocketContext.Provider>
        );
    }
}

const withSocket = () => ChildComponent => {
    // Returning a named value tells react what to call this component. Otherwise it's just "Unknown" in the dev tools
    const WithSocket = (props) => (
        <SocketContext.Consumer>
            {context => <ChildComponent socket={context.socket} socketAuth={{isAuthenticated: context.authenticated, updateAuthStatus: context.updateAuthStatus}} {...props}/>}
        </SocketContext.Consumer>
    );
    return WithSocket;
}

export { SocketProvider, withSocket};
