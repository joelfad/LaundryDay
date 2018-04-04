const styles = theme => ({
    avatar: {
    },
    icon: {
        width: "50px",
        height: "50px",
        border: "10px dashed " + theme.palette.primary.contrastText,    
        borderRadius: "50%",
    },
    selected: {
        width: "50px",
        height: "50px",
        border: "10px dashed " + theme.palette.primary.main,    
        borderRadius: "50%",
    }
});

export default styles;
