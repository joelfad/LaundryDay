import React from "react";
import { withStyles } from "material-ui/styles";
import meStyles from "./styles";
import Typography from "material-ui/Typography";
import Avatar from "../Avatar/Avatar";

const me = props => {
    let { classes } = props;
    return (
        <div className={classes.me}>
        <Avatar index={props.avatar} large turn={props.turn}/>
            <div>
                <Typography className={classes.name} variant="headline">{props.name}</Typography>
            </div>
        </div>
    );
};

export default withStyles(meStyles, { withTheme: true })(me);
