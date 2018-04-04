import React from "react";
import { withStyles } from "material-ui/styles";
import avatarStyles from "./styles";
import avatar1 from './icons/1.svg';
import avatar2 from './icons/2.svg';
import avatar3 from './icons/3.svg';
import avatar4 from './icons/4.svg';
import avatar5 from './icons/5.svg';
import avatar6 from './icons/6.svg';

const avatar = props => {
    let { classes } = props;
    let avatar = null;
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
    switch (props.id) {
        case '1':
            avatar = <img className={name} style={style} src={avatar1} alt="" onClick={props.clicked}/>;
        break;
        case '2':
            avatar = <img className={name} style={style} src={avatar2} alt="" onClick={props.clicked}/>;
        break;
        case '3':
            avatar = <img className={name} style={style} src={avatar3} alt="" onClick={props.clicked}/>;
        break;
        case '4':
            avatar = <img className={name} style={style} src={avatar4} alt="" onClick={props.clicked}/>;
        break;
        case '5':
            avatar = <img className={name} style={style} src={avatar5} alt="" onClick={props.clicked}/>;
        break;
        case '6':
            avatar = <img className={name} style={style} src={avatar6} alt="" onClick={props.clicked}/>;
        break;
        default:
            avatar = <img className={name} style={style} src={avatar1} alt="" onClick={props.clicked}/>;
        break;
        
    }
    return (
        <div className={classes.avatar}>
            {avatar}
        </div>
    );
};

export default withStyles(avatarStyles, { withTheme: true })(avatar);