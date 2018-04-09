/* global gapi */
import React, { Component } from "react";

import LoginToContinue from "../../components/LoginToContinue/LoginToContinue";
/* 
* The purpose of these components is not to provide access to the google auth object, as that can be accessed via the global 'gapi.auth2'
* The the google auth object must be initialized before use.
* Since initialization is asycronous, this context provider ensures it's ready before other components try to use it.
*/

const AuthContext = React.createContext();

class AuthProvider extends Component {
    state = {
        gAuth: null,

    }

    componentDidMount = () => {
        gapi.load("auth2", () => {
            gapi.auth2.init().then(
                gAuth => {
                    this.setState({gAuth});
                },
                error => {
                    console.error("Something very bad has happened. It's likely that you are using an acient browser that is not supported.")
                });
        });
    }

    render() {
        return (
            <AuthContext.Provider value={this.state.gAuth}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

const withAuth = () => Component => {
    const WithAuth = (props) => {
        return (
            <AuthContext.Consumer>
                {gAuth => {
                    if(gAuth) {
                        if (!gAuth.isSignedIn.get()) {
                            return <LoginToContinue/>;
                        }
                        return <Component gAuth={gAuth} {...props}/>;
                    }
                    else {
                        return <LoginToContinue loading/>
                    }
                }}
            </AuthContext.Consumer>
        );
    }
    return WithAuth;
}

export { AuthProvider, withAuth };
