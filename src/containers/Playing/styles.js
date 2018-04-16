import badge from "./img/speech_bubble.png";

const styles = theme => ({
    title: {
        textAlign: "center",
        fontSize: "3em",
        paddingTop: "20px",
        paddingBottom : "30px",
        color: theme.palette.primary.contrastText,
        fontFamily: theme.fonts.fancy
    },
    playing: {
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    paper: {
        height: "calc(100vh - 126px)",
        width: "calc(100vw - 40px)",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    button: {
        width: "0px",
        height: "80px",
        marginTop: "auto",
        marginBottom: "auto",
        color: theme.palette.primary.contrastText,
        textTransform: "capitalize",
        fontFamily: theme.fonts.simple,
        fontSize: "1.5em",
    },
    enableAsk: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.light
        }
    },
    disableAsk: {
        backgroundColor: theme.palette.primary.lightgrey,
        pointerEvents: "none"
    },
    quitButton: {
        color: theme.palette.primary.dark,
        display: "block",
        position: "absolute",
        top: "34px",
        right: "14px",
        fontSize: "40px",
        "&:hover": {
            color: theme.palette.primary.contrastText
        }
    },
    debugNextTurnButton: {
        color: theme.palette.primary.dark,
        display: "block",
        position: "absolute",
        top: "34px",
        left: "14px",
        fontSize: "40px",
        "&:hover": {
            color: theme.palette.primary.contrastText
        }
    },
    question: {
        fontFamily: theme.fonts.simple,
        paddingLeft: "10px",
        paddingRight: "10px",
        textAlign: "center"
    },
    messageBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "20vh",
        backgroundImage: "url(" + badge + ")",
        backgroundSize: "90% 80%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
    message: {
        transform: "rotate(-4deg)",
        paddingLeft: "50px",
        paddingRight: "30px",
        paddingBottom: "22px",
        marginTop: "auto",
        marginBottom: "auto",
        textAlign: "center",
        color: theme.palette.primary.darkgrey,
        fontFamily: "Just Me Again Down Here, cursive",
        fontSize: "1.5em",
        lineHeight: "100%"
    },
    opponents: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    thisPlayerArea: {
        display: "flex",
        justifyContent: "space-around"
    },
    cards: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "80vw",
        marginLeft: "auto",
        marginRight: "auto",
        overflowX: "auto"
    },
    grow: {
        width: "30vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    "@media (min-width: 500px)": {
        message: {
            fontSize: "2.5em"
        }
    },
    "@media (min-width: 900px)": {
        messageBox: {
             width: "800px",
             marginLeft: "auto",
             marginRight: "auto"
        }
    }
});

export default styles;
