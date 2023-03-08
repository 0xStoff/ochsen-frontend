import { experimental_extendTheme as extendTheme, responsiveFontSizes } from "@mui/material";


let THEME = extendTheme({
    spacing: 5,
    typography: {
        fontFamily: "Helvetica Neue",
    },
    components: {
        MuiAccordion: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    border: "none",
                    '&::before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                colorPrimary: '#fff'
            }
        }
    },
})

THEME = responsiveFontSizes(THEME) as typeof THEME;

export { THEME }