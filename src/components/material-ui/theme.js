import { createMuiTheme } from "material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#26C6DA",
            mainLight: "#5bd4e3",
            mainDark: "#198390",
            light: "red",
            dark: "#00838F",
            contrastText: "#ffffff",
            darkgrey: "#454545",
            pastelred: "#FF6962"
        }
    },
    fonts: {
        fancy: "Pacifico, cursive",
        simple: "Source Sans Pro, sans-serif"
    }
});

export default theme;