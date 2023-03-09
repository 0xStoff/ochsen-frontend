import { DarkMode, LightMode } from "@mui/icons-material";
import Contact from "../components/tabs/tab-panels/Contact";
import type { ContactInterface } from "@/interfaces/contact";
import type { DishesByCategories } from "@/interfaces/menu";
import Menu from "../components/tabs/tab-panels/Menu";
import OpeningHours from "../components/tabs/tab-panels/OpeningHours";
import type { OpeningHoursInterface } from "@/interfaces/opening-hours-interface";

export const
    TAB_PANELS = (
        menu: DishesByCategories,
        openingHours: Array<OpeningHoursInterface>,
        contact: ContactInterface
    ) => ({
        "contact": <Contact contact={contact} />,
        "menu": <Menu menu={menu} />,
        "openingHours": <OpeningHours openingHours={openingHours} />
    }),
    THEMEICONS = {
        "dark": <LightMode />,
        "light": <DarkMode />
    };
