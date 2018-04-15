const styles = theme => ({
    cards: {
        fontSize: "55px"
    },
    selected: {
        color: theme.palette.primary.main
    },
    unselected: {
        color: theme.palette.primary.darkgrey
    },
    count: {
        display:"block",
        marginTop:"-46px",
    },
    countText: {
        fontFamily: theme.fonts.simple,
        color: "white"
    }
});

export default styles;
