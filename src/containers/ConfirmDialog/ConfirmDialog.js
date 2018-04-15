import React, { Component } from "react";
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ConfirmDialog extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <span onClick={this.handleOpen}>
                    {this.props.children}
                </span>
                <Dialog
                    open={this.state.open}
                    transition={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle id="alert-dialog-slide-title">
                    {this.props.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {this.props.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        {this.props.no || "Cancel"}
                    </Button>
                    <Button onClick={this.props.action} color="primary">
                        {this.props.yes || "Yes"}
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ConfirmDialog;
