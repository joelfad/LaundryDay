const styles = theme => ({
    buttons: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        margin: "auto",
    },
    button: {
        width: "200px",
        margin: "10px",
        fontSize: "1.5em",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        textTransform: "capitalize",
        fontFamily: theme.fonts.simple,
        "&:hover": {
            backgroundColor: theme.palette.primary.contrastText
        }
    },
    title: {
        textAlign: "center",
        fontSize: "3em",
        marginTop: "20vh",
        marginBottom : "25vh",
        color: theme.palette.primary.contrastText,
        fontFamily: theme.fonts.fancy
    },
    login: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100vh",
        backgroundColor: theme.palette.primary.main
    }
});

export default styles;
