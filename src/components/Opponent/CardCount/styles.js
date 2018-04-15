const styles = theme => ({
    cards: {
        fontSize: "12vw",
        marginTop: "-1vw"
    },
    selected: {
        color: theme.palette.primary.main
    },
    unselected: {
        color: theme.palette.primary.darkgrey
    },
    count: {
        display:"block",
        marginTop:"-10vw",
    },
    countText: {
        fontFamily: theme.fonts.simple,
        color: "white"
    },
    "@media (min-width: 700px)": {
        countText: {
            fontSize: "2em"
        },
        count: {
            marginTop: "-9vw"
        }

    }
    }
);

export default styles;
