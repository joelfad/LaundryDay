const styles = theme => ({
    title: {
        textAlign: "center",
        fontSize: "3em",
        paddingTop: "20px",
        paddingBottom : "30px",
        color: theme.palette.primary.contrastText,
        fontFamily: theme.fonts.fancy
    },
    lobby: {
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    paper: {
        maxHeight: "calc(100vh - 126px)",
        width: "calc(100vw - 40px)",
        overflowY: "auto"
    },
    newGame: {
        position: "absolute",
        right: "0px",
        bottom: "0px",
        margin: "20px"
    },
    noGames: {
        margin: "10px"
    },
    home: {
        position: "absolute",
        right: "0",
        top: "0",
        width: "100px",
        margin: "10px",
        fontSize: "1.3em",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        textTransform: "capitalize",
        fontFamily: theme.fonts.simple,
        "&:hover": {
            backgroundColor: theme.palette.primary.contrastText
        }
    }
});

export default styles;
