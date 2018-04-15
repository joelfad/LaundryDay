import React from "react";
import { withStyles } from "material-ui/styles";
import avatarStyles from "./styles";
import avatars from "./avatarIcons";

const avatar = props => {
    let { classes } = props;
    let border = classes.unselected;
    let style = null;
    if (props.selected) {
        border = classes.selected;
    } else if (props.turn) {
        border = classes.turn;
    }
    if (props.large) {
        style = {height:"10vh", width:"10vh"};
    }
    return (
        <div className={classes.avatar}>
            <img className={[classes.icon, border].join(" ")} style={style} src={avatars[props.index]} alt="" onClick={props.clicked}/>
        </div>
    );
};

export default withStyles(avatarStyles, { withTheme: true })(avatar);
