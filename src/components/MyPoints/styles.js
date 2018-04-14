import badge from "./img/badge.png";

const styles = theme => ({
    badge: {
        backgroundImage: "url(" + badge + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "&:before": {
            content: "",
            padding: "50% 0",
            display: "inline-block",
        }
    },
    count: {
        color: "white",
        fontSize: "70px",
        fontWeight: "bold",
        fontFamily: theme.fonts.simple,
        marginBottom: "-8px"
    },
    points: {
        color: "white",
        fontFamily: theme.fonts.simple,
        marginBottom: "10px"
    }
});

export default styles;
