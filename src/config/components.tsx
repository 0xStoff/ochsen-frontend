import { DarkMode, LightMode } from "@mui/icons-material";
import Contact from "@tabs/tab-panels/Contact";
import type { ContactInterface } from "@interfaces/contact";
import type { DishesByCategories } from "@interfaces/menu";
import Menu from "@tabs/tab-panels/Menu";
import OpeningHours from "@tabs/tab-panels/OpeningHours";
import type { OpeningHoursInterface } from "@interfaces/opening-hours-interface";
import Reservation from "@tabs/tab-panels/Reservation";
import type { ReservationInterface } from "@interfaces/reservation";

export const TAB_PANELS = (
    menu: DishesByCategories,
    openingHours: Array<OpeningHoursInterface>,
    contact: ContactInterface,
    // reservation: Array<ReservationInterface>
) => ({
    "contact": <Contact contact={contact} />,
    "menu": <Menu menu={menu} />,
    "openingHours": <OpeningHours openingHours={openingHours} />,
    // "reservation": <Reservation reservation={reservation} />
})

export const THEMEICONS = {
    "dark": <LightMode />,
    "light": <DarkMode />
};
