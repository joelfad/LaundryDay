const styles = theme => ({
    card: {
        width: "10vh",
        maxWidth: "90px",
        height: "12vh",
        maxHeight: "108px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px"
    },
    value: {
        margin: "auto",
        color: theme.palette.primary.main,
        fontFamily: theme.fonts.simple
    },
    laundry: {
    },
    icon: {
        width: "50px",
        height: "50px",
        marginBottom: "5px"
    },
    selected: {
        outline: "5px solid " + theme.palette.primary.main,    
    }
});

export default styles;
