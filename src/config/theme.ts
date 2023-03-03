import { experimental_extendTheme as extendTheme } from "@mui/material";


const THEME = extendTheme({
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
    // colorSchemes: {
    //     light: {
    //         palette: {
    //             text: {
    //                 // primary: blue[900],
    //             }
    //         },
    //     },
    //     dark: {
    //         palette: {
    //             text: {
    //                 // primary: blue[200],
    //             },
    //         },
    //     },
    // },
})

// THEME = extendTheme({
//     typography: {
//         // h1: {
//         //     [THEME.breakpoints.up("xs")]: {
//         //         fontSize: "3.5rem",
//         //     },
//         //     [THEME.breakpoints.up("md")]: {
//         //         fontSize: "5rem",
//         //     },
//         //     [THEME.breakpoints.up("lg")]: {
//         //         fontSize: "7rem",
//         //     },
//         // },
//     },
// })

export { THEME }