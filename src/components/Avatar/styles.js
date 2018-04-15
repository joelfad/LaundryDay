const styles = theme => ({
    avatar: {
    },
    icon: {
        width: "50px",
        height: "50px",
        padding: "5px",
        borderRadius: "50%"
    },
    unselected: {
        border: "5px solid " + theme.palette.primary.contrastText
    },
    selected: {
        border: "5px solid " + theme.palette.primary.main  
    },
    turn: {
        border: "5px solid " + theme.palette.primary.pastelpurple
    }
});

export default styles;
