import React from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

const socketProvider = (props) => (
    <SocketContext.Provider value={io("localhost:3001")}>
        {props.children}
    </SocketContext.Provider>
);

const withSocket = () => Component => {
    // Returning a named value tells react what to call this component. Otherwise it's just "Unknown" in the dev tools
    const WithSocket = (props) => (
        <SocketContext.Consumer>
            {socket => <Component socket={socket} {...props}/>}
        </SocketContext.Consumer>
    );
    return WithSocket;
}

export { socketProvider as SocketProvider, withSocket};
