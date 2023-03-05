import { DarkMode, LightMode } from "@mui/icons-material";
import Contact from "../components/tabs/tab-panels/Contact";
import type { Dish } from "../interfaces/menu";
import Menu from "../components/tabs/tab-panels/Menu";
import OpeningHours from "../components/tabs/tab-panels/OpeningHours";
import type { OpeningHoursInterface } from "../interfaces/opening-hours-interface";
import type { PopulatedContactInterface } from "../interfaces/contact";

export const TAB_PANELS = (
    menu: Array<Dish>,
    openingHours: Array<OpeningHoursInterface>,
    contact: PopulatedContactInterface
) => ({
    menu: <Menu menu={menu} />,
    openingHours: <OpeningHours openingHours={openingHours} />,
    contact: <Contact contact={contact} />,
})
export const THEMEICONS = {
    light: <DarkMode />,
    dark: <LightMode />,
}