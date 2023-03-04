import { DarkMode, LightMode } from "@mui/icons-material";
import Contact from "../components/tabs/tab-panels/Contact";
import type { Dish } from "../interfaces/menu";
import Menu from "../components/tabs/tab-panels/Menu";
import OpeningHours from "../components/tabs/tab-panels/OpeningHours";
import type { OpeningHoursInterface } from "../interfaces/opening-hours-interface";

export const TAB_PANELS = (menu: Array<Dish>, openingHours: Array<OpeningHoursInterface>) => ({
    menu: <Menu menu={menu} />,
    openingHours: <OpeningHours openingHours={openingHours} />,
    contact: <Contact />,
})
export const THEMEICONS = {
    light: <DarkMode />,
    dark: <LightMode />,
}