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
        margin:"10px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        textTransform: "capitalize",
        fontFamily: theme.fonts.simple,
        alignSelf: "flex-end",
        fontSize: "1.5em",
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        }
    },
    question: {
        fontFamily: theme.fonts.simple,
        paddingLeft: "10px",
        paddingRight: "10px",
        textAlign: "center"
    },
    select: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto"
    },
    formControl: {
        width: "100px"
    },
    opponents: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    meArea: {
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
    }
});

export default styles;
