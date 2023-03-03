import { experimental_extendTheme as extendTheme, responsiveFontSizes } from "@mui/material";


let THEME = extendTheme({
    spacing: 5,
    typography: {
        fontFamily: "Helvetica Neue",
    },
    components: {

        MuiIconButton: {
            styleOverrides: {
                colorPrimary: '#fff'
            }
        }
    },
})

THEME = responsiveFontSizes(THEME) as typeof THEME;

export { THEME }