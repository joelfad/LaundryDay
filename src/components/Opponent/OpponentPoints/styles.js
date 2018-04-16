const styles = theme => ({
    badge: {
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "10vw",
        maxWidth: "100px",
        height: "10vw",
        maxHeight: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    count: {
        color: "white",
        fontSize: "1em",
        fontWeight: "bold",
        fontFamily: theme.fonts.simple,
    },
    "@media (min-width: 500px)": {
        count: {
            fontSize: "2em"
        },
    },
    "@media (min-width: 1100px)": {
        badge: {
            maxWidth: "75px",
            maxHeight: "75px"
    }
} 
});

export default styles;
