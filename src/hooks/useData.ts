import { fetchContact, fetchHomepage, fetchMenu, fetchOpeningHours } from "../services/http";
import { useEffect, useState } from "react";
import type { Dish } from "../interfaces/menu";
import type { HomepageInterface } from "../interfaces/event";
import type { OpeningHoursInterface } from "../interfaces/opening-hours-interface";
import type { PopulatedContactInterface } from "../interfaces/contact";

export const useData = <T>(initialState: T, fetchData: () => Promise<T>) => {
    const [data, setData] = useState<T>(initialState);

    useEffect(() => {
        const getData = async () => {
            const fetch = await fetchData();
            setData(fetch);
        };
        getData()
    }, []);

    return data
};

export const useMenuData = () => {
    return useData<Array<Dish>>([], fetchMenu)
};

export const useOpeningHours = () => {
    return useData<Array<OpeningHoursInterface>>([], fetchOpeningHours)
};

export const useHomepage = () => {
    return useData<HomepageInterface>({
        event: '',
        title: '',
        claim: ''
    }, fetchHomepage)
};

export const useContact = () => {
    return useData<PopulatedContactInterface>({
        title: '',
        name: '',
        street: '',
        postal: '',
        phone: '',
        picture: null
    }, fetchContact)
};

