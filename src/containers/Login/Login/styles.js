const styles = theme => ({
    fields: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        margin: "auto",
    },
    field: {
        margin: "5px",
    },
    input: {
        fontFamily: theme.fonts.simple
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px",
        margin: "auto",
    },
    button: {
        width: "100px",
        margin: "10px",
        fontSize: "1.5em",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        textTransform: "capitalize",
        fontFamily: theme.fonts.simple,
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        }
    },
    title: {
        textAlign: "center",
        fontSize: "3em",
        marginTop: "20vh",
        marginBottom : "20vh",
        color: theme.palette.primary.contrastText,
        fontFamily: theme.fonts.fancy
    },
    login: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme.palette.primary.main
    },
    username: {
        width: "247px",
        fontFamily: theme.fonts.simple
    },
    paper: {
        minWidth: "270px",
        width: "80vw",
        maxWidth: "350px"
    }
});

export default styles;
