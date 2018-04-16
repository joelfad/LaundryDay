import React from "react";
import { CircularProgress } from "material-ui/Progress";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router-dom";

import styles from "./styles";

const loginToContinue = props => {
    let display;
    if (props.loading) {
        display = <CircularProgress className={props.classes.spinner} thickness={5}/>;
    } else {
        display = <Button variant="raised" className={props.classes.button} onClick={() => props.history.push("/")}>Please login to continue</Button>;
    }
    return (
        <div className={props.classes.background}>
            <div>
                <Typography className={props.classes.title} variant="title">Laundry Day</Typography>
                <div className={props.classes.buttons}>
                    {display}
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles, { withTheme: true })(withRouter(loginToContinue));
