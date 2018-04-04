import { createMuiTheme } from "material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#26C6DA",
            light: "red",
            dark: "#00838F",
            contrastText: "#ffffff"
        }
    },
    fonts: {
        fancy: "Pacifico, cursive",
        simple: "Source Sans Pro, sans-serif"
    }
});

export default theme;