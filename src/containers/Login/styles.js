const styles = theme => ({
    buttons: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        margin: "auto",
    },
    button: {
        margin: "10px"
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
