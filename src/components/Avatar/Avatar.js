import React from "react";
import { withStyles } from "material-ui/styles";
import avatarStyles from "./styles";
import avatars from "./avatarIcons";

const avatar = props => {
    let { classes } = props;
    let name = null;
    let style = null;
    if (props.selected) {
        name = classes.selected;
    } else {
        name = classes.icon;
    }
    if (props.large) {
        style = {height:"10vh", width:"10vh"};
    }
    return (
        <div className={classes.avatar}>
            <img className={name} style={style} src={avatars[props.index]} alt="" onClick={props.clicked}/>
        </div>
    );
};

export default withStyles(avatarStyles, { withTheme: true })(avatar);
