import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import loginStyles from "./styles";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

class Login extends Component {
    state = {
        username: {value: "", error: false},
        password: {value: "", error: false, show: false},
    }

    handleChange = prop => event => {
        this.setState({ [prop]: { value: event.target.value,  error: false, show: this.state[prop].show}});
    };

    handleClickShowPassword = prop => event => {
        this.setState({ [prop]: { ...this.state[prop], show: !this.state[prop].show }});
      };

    handleForwardClick = () => {
        let validInput = true;
        Object.keys(this.state).forEach((key) => {
            if (this.state[key].value === "") {
                this.setState({[key]: {...this.state[key], error: true}});
                validInput = false;
            }
        });
        if ( validInput ) {
            this.sendNewUserRequest();
        }
    };

    sendNewUserRequest = () => {
        // send some sort of message to the backend
        console.log("Credentials submitted");
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.login}>
                <Typography className={classes.title} variant="title">Login</Typography>
                <Paper className={classes.paper}>
                    <div className={classes.fields}>
                    <FormControl className={classes.field}>
                         <InputLabel>Username</InputLabel>
                            <Input
                                className={classes.username}
                                error={this.state.username.error}
                                id="username"
                                type="text"
                                value={this.state.username.value}
                                onChange={this.handleChange('username')}
                            />
                    </FormControl>
                    <FormControl className={classes.field}>
                        <InputLabel>Password</InputLabel>
                            <Input
                                id="password"
                                error={this.state.password.error}
                                type={this.state.password.show? 'text' : 'password'}
                                value={this.state.password.value}
                                onChange={this.handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                         <IconButton
                                            onClick={this.handleClickShowPassword("password")}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                    </FormControl>
                    </div>
                    <div className={classes.buttons}>
                    <Button className={classes.button}>Back</Button>
                    <Button className={classes.button} onClick={this.handleForwardClick}>Next</Button>
                    </div>
                </Paper>
            </div>
        );
    }
}


export default withStyles(loginStyles, { withTheme: true })(Login);
