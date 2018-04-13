import React from "react";
import { withStyles } from "material-ui/styles";
import avatarStyles from "./styles";
import avatar1 from './icons/1.svg';
import avatar2 from './icons/2.svg';
import avatar3 from './icons/3.svg';
import avatar4 from './icons/4.svg';
import avatar5 from './icons/5.svg';
import avatar6 from './icons/6.svg';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

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
