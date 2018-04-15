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
    }

});

export default styles;
