import { DarkMode, LightMode } from "@mui/icons-material";
import Contact from "../components/tabs/tab-panels/Contact";
import Menu from "../components/tabs/tab-panels/Menu";
import OpeningHours from "../components/tabs/tab-panels/OpeningHours";

export const TAB_PANELS = {
    menu: <Menu />,
    openingHours: <OpeningHours />,
    contact: <Contact />,
}
export const THEMEICONS = {
    light: <DarkMode />,
    dark: <LightMode />,
}