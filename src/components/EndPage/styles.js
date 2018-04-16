const styles = theme => ({
    title: {
        textAlign: "center",
        fontSize: "3em",
        marginTop: "20vh",
        marginBottom : "5px",
        color: theme.palette.primary.contrastText,
        fontFamily: theme.fonts.fancy
    },
    endPage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme.palette.primary.main
    },
    text: {
        minWidth: "270px",
        width: "80vw",
        maxWidth: "350px",
        fontFamily: theme.fonts.simple,
        color: theme.palette.primary.contrastText
    },
    heading: {
        textAlign: "center",
        color: "inherit"
    },
    content: {
        color: "inherit"
    },
    button: {
        width: "200px",
        margin:"20px",
        fontSize: "1.5em",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        textTransform: "capitalize",
        fontFamily: theme.fonts.simple,
        "&:hover": {
            backgroundColor: theme.palette.primary.contrastText
        }
    },
    textWrapper: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
});

export default styles;
