const styles = theme => ({
    badge: {
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "20vw",
        maxWidth: "100px",
        height: "20vw",
        maxHeight: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    count: {
        color: "white",
        fontSize: "1.5em",
        fontWeight: "bold",
        fontFamily: theme.fonts.simple,
    },
    points: {
        color: "white",
        fontSize: "0.75em",
        fontFamily: theme.fonts.simple,
    },
    "@media (min-width: 500px)": {
        count: {
            fontSize: "2em"
        },
        points: {
            fontSize: "1em"
        }
    } 
});

export default styles;
