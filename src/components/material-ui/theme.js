import { createMuiTheme } from "material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#26C6DA",
            light: "#5BD4E3",
            dark: "#00838F",
            contrastText: "#FFFFFF",
            darkgrey: "#454545",
            lightgrey: "#E0E0E0",
            pastelred: "#FF6962",
            pastelpurple: "#B19BD9"
        }
    },
    fonts: {
        fancy: "Pacifico, cursive",
        simple: "Source Sans Pro, sans-serif"
    }
});

export default theme;