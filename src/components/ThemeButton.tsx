import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useColorScheme } from "@mui/material";

type Themes = 'dark' | 'light'

export const ThemeButton = () => {
    const { mode, setMode } = useColorScheme();
    const theme = mode as Themes;

    const themeIcons = {
        light: <DarkMode />,
        dark: <LightMode/>,
    };

    const toggleMode = () => {
        setMode(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <IconButton onClick={toggleMode} aria-label="Light-Dark-Mode Button">
            {themeIcons[theme]}
        </IconButton>
    )
};