import { experimental_extendTheme as extendTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const THEME = extendTheme({
    typography: {
        fontFamily: "Helvetica Neue",
    },
    colorSchemes: {
        light: {
            palette: {
                text: {
                    primary: grey[900],
                }
            },
        },
        dark: {
            palette: {
                text: {
                    primary: grey[200],
                },
            },
        },
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "#fff"
                }
            }
        },
    }
})