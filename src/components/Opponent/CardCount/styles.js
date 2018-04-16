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

    },
    "@media (min-width: 1100px)": {
        cards: {
            fontSize: "100px"
        },
        count: {
            marginTop: "-75px",
            marginLeft: "calc(-3vw + 10px)"
        }
    },
    "@media (min-width: 1600px)": {
        cards: {
            fontSize: "100px"
        },
        count: {
            marginTop: "-75px",
            marginLeft: "calc(-4vw + 10px)"
        }
    },
    "@media (min-width: 2300px)": {
        cards: {
            fontSize: "100px"
        },
        count: {
            marginTop: "-75px",
            marginLeft: "calc(-5vw + 20px)"
        }
    }
    }
);

export default styles;
