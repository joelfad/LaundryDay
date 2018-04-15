import badge from "./img/badge.png";

const styles = theme => ({
    badge: {
        backgroundImage: "url(" + badge + ")",
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
    } 
});

export default styles;
