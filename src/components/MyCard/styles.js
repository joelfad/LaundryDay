const styles = theme => ({
    card: {
        width: "10vh",
        maxWidth: "90px",
        height: "12vh",
        maxHeight: "108px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px"
    },
    value: {
        margin: "auto",
        color: theme.palette.primary.main,
        fontFamily: theme.fonts.simple
    },
    laundry: {
    },
    icon: {
        width: "50px",
        height: "50px",
        marginBottom: "5px"
    },
    selected: {
        outline: "5px solid " + theme.palette.primary.main,    
    },
    "@media (max-width: 400px)": {
        icon: {
            width: "30px",
            height: "30px",
        },
        num: {
            fontSize: "0.75em"
        },
        card: {
            width: "8vh",
            height: "10vh"
        }
    }
});

export default styles;
