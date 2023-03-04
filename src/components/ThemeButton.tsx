import { IconButton, useColorScheme } from "@mui/material";
import { THEMEICONS } from "../config/components";
import type { Themes } from "../interfaces/themes";

export const ThemeButton = () => {
    const { mode, setMode } = useColorScheme();
    const theme = mode as Themes;

    const toggleMode = () => {
        setMode(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <IconButton aria-label="Light-Dark-Mode Button" onClick={toggleMode} sx={{ color: "#fff" }}>
            {THEMEICONS[theme]}
        </IconButton>
    )
};