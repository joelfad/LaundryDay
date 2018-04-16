const styles = theme => ({
    thisPlayer: {
        fontFamily: theme.fonts.simple,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    name: {
        fontFamily: theme.fonts.simple
    },
    nums: {
        display: "flex",
        flexDirection: "row"
    },
    newrow: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    "@media (min-width: 1100px)": {
        newrow: {
            display: "flex",
            flexDirection: "row"
        }
    }

});

export default styles;
