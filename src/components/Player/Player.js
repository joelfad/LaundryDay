import React, { Fragment } from "react";
import { withStyles } from "material-ui/styles";
import playerStyles from "./styles";
import Typography from "material-ui/Typography";
import Avatar from "../Avatar/Avatar";

const player = props => {
    let { classes } = props;
    return (
        <Fragment>
        <div className={classes.player}>
        <Avatar id={props.avatar}/>
            <div>
                <Typography className={classes.name} variant="title">{props.name}</Typography>
            </div>
        </div>
        </Fragment>
    );
};

export default withStyles(playerStyles, { withTheme: true })(player);
