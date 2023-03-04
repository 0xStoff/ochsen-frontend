import { fetchContact, fetchHomepage, fetchMenu, fetchOpeningHours } from "../services/http";
import { useEffect, useState } from "react";
import type { Dish } from "../interfaces/menu";
import type { OpeningHoursInterface } from "../interfaces/opening-hours-interface";
import type { HomepageInterface } from "../interfaces/event";
import type { ContactInterface } from "../interfaces/contact";

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


export const useHomepage = () => {
    const [homepage, setHomepage] = useState<HomepageInterface>({ event: '', title: '', claim: '' });

    useEffect(() => {
        const getHomepage = async () => {
            const homepageData = await fetchHomepage();
            setHomepage(homepageData);
        };
        getHomepage()
    }, []);

    return homepage
};

export const useContact = () => {
    const [contact, setContact] = useState<ContactInterface>({
        title: '',
        name: '',
        street: '',
        postal: '',
        phone: '',
    });

    useEffect(() => {
        const getContact = async () => {
            const contactData = await fetchContact();
            setContact(contactData);
        };
        getContact()
    }, []);

    return contact
};