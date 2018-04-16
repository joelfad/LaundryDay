import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import newUserStyles from "./styles";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

class NewUser extends Component {
    state = {
        username: {value: "", error: false},
        password: {value: "", error: false, show: false},
        repeatPassword: {value: "", error: false, show: false}
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
        if (this.state.password.value !== this.state.repeatPassword.value) {
            this.setState({password: {...this.state.password, error: true}});
            this.setState({repeatPassword: {...this.state.repeatPassword, error: true}});
            validInput = false;
        }
        if (validInput) {
            this.sendNewUserRequest()
        }
    };

    sendNewUserRequest = () => {
        // send some sort of message to the backend
        console.log("Credentials submitted");
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.newUser}>
                <Typography className={classes.title} variant="title">New User</Typography>
                <Paper>
                    <div className={classes.fields}>
                    <FormControl className={classes.field}>
                         <InputLabel className={classes.input}>Username</InputLabel>
                            <Input
                                className={classes.username}
                                id="username"
                                error={this.state.username.error}
                                type="text"
                                value={this.state.username.value}
                                onChange={this.handleChange('username')}
                            />
                    </FormControl>
                    <FormControl className={classes.field}>
                        <InputLabel className={classes.input}>Password</InputLabel>
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
                                            {this.state.password.show ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                    </FormControl>
                    <FormControl className={classes.field}>
                        <InputLabel className={classes.input}>Repeat Password</InputLabel>
                            <Input
                                id="repeatPassword"
                                error={this.state.repeatPassword.error}
                                name="Repeat Password"
                                type={this.state.repeatPassword.show? 'text' : 'password'}
                                value={this.state.repeatPassword.value}
                                onChange={this.handleChange('repeatPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                         <IconButton
                                            onClick={this.handleClickShowPassword("repeatPassword")}
                                        >
                                            {this.state.repeatPassword.show ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                    </FormControl>
                    </div>
                    <div className={classes.buttons}>
                        <Button className={classes.button}>Cancel</Button>
                        <Button className={classes.button} onClick={this.handleForwardClick}>Next</Button>
                    </div>
                </Paper>
            </div>
        );
    }
}


export default withStyles(newUserStyles, { withTheme: true })(NewUser);
