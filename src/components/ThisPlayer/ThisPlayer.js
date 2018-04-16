import React from "react";
import { withStyles } from "material-ui/styles";
import thisPlayerStyles from "./styles";
import Typography from "material-ui/Typography";
import Avatar from "../Avatar/Avatar";

const thisPlayer = props => {
    let { classes } = props;
    return (
        <div className={classes.thisPlayer}>
        <Avatar index={props.player.avatar} large turn={props.player.turn}/>
            <div>
                <Typography className={classes.name} variant="headline">{props.player.name}</Typography>
            </div>
        </div>
    );
};

export default withStyles(thisPlayerStyles, { withTheme: true })(thisPlayer);
