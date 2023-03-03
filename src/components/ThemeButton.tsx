import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useColorScheme } from "@mui/material";
import { Themes } from "../interfaces/Themes";


export const ThemeButton = () => {
    const { mode, setMode } = useColorScheme();
    const theme = mode as Themes;

    const themeIcons = {
        light: <DarkMode />,
        dark: <LightMode />,
    };

    const toggleMode = () => {
        setMode(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <IconButton aria-label="Light-Dark-Mode Button" onClick={toggleMode} sx={{ color: "#fff" }}>
            {themeIcons[theme]}
        </IconButton>
    )
};