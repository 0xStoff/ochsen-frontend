import { fetchMenu, fetchOpeningHours } from "../services/http";
import { useEffect, useState } from "react";
import type { Dish } from "../interfaces/menu";
import type { OpeningHoursInterface } from "../interfaces/opening-hours-interface";

export const useMenuData = () => {
    const [menu, setMenu] = useState<Array<Dish>>([]);

    useEffect(() => {
        const getMenuData = async () => {
            const menuData = await fetchMenu();
            setMenu(menuData);
        };
        getMenuData()
    }, []);

    return menu
};

export const useOpeningHours = () => {
    const [openingHours, setOpeningHours] = useState<Array<OpeningHoursInterface>>([]);

    useEffect(() => {
        const getOpeningHoursData = async () => {
            const openingHoursData = await fetchOpeningHours();
            setOpeningHours(openingHoursData);
        };
        getOpeningHoursData()
    }, []);

    return openingHours
};
