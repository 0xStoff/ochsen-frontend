import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { Home } from "@/Home";
import { THEME } from "@config/theme";

export default function App () {

    return (
        <CssVarsProvider theme={THEME}>
            <CssBaseline />
            <Home />
        </CssVarsProvider>
    );

}

