import { DarkMode, LightMode } from "@mui/icons-material";
import Contact from "../components/tab-panels/Contact";
import Menu from "../components/tab-panels/Menu";
import OpeningHours from "../components/tab-panels/OpeningHours";

export const NAVIGATION_PANELS = {
    menu: <Menu />,
    openingHours: <OpeningHours />,
    contact: <Contact />,
}


export const THEMEICONS = {
    light: <DarkMode />,
    dark: <LightMode />,
}