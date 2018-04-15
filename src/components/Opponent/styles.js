const styles = theme => ({
    me: {
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
    "@media (min-width: 1100px)": {
        newrow: {
            display: "flex",
            flexDirection: "row"
        }
    }

});

export default styles;
