import { CssBaseline, } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { THEME } from "./config/theme";
import { Home } from "./Home";

export default function App() {
    return (
        <CssVarsProvider theme={THEME}>
            <CssBaseline />
                <Home />
        </CssVarsProvider>
    );
}

