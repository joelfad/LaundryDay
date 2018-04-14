const styles = theme => ({
    avatar: {
    },
    icon: {
        width: "50px",
        height: "50px",
        padding: "5px",
        border: "5px solid " + theme.palette.primary.contrastText,    
        borderRadius: "50%",
    },
    selected: {
        width: "50px",
        height: "50px",
        padding: "5px",
        border: "5px solid " + theme.palette.primary.main,    
        borderRadius: "50%",
    }
});

export default styles;
