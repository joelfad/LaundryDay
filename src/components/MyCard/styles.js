const styles = theme => ({
    card: {
        marginTop: "10px",
        width: "10vh",
        maxWidth: "90px",
        height: "12vh",
        maxHeight: "108px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px"
    },
    value: {
        margin: "auto",
        color: theme.palette.primary.main,
        fontFamily: theme.fonts.simple
    }

});

export default styles;
