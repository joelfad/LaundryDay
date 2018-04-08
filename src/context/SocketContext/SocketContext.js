import React from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

const socketProvider = (props) => (
    <SocketContext.Provider value={{socket: io("localhost:3001")}}>
        {props.children}
    </SocketContext.Provider>
);

const withSocket = () => Component => (props) => (
    <SocketContext.Consumer>
        {(context) => <Component socket={context.socket} {...props}/>}
    </SocketContext.Consumer>
);

export { socketProvider as SocketProvider, withSocket};
