import { fetchContact, fetchHomepage, fetchMenu, fetchOpeningHours } from "../services/http";
import { useEffect, useState } from "react";
import type { ContactInterface } from "@/interfaces/contact";
import type { DishesByCategories } from "@/interfaces/menu";
import type { HomepageInterface } from "@/interfaces/event";
import type { OpeningHoursInterface } from "@/interfaces/opening-hours-interface";

export const useData = <T>(initialState: T, fetchData: () => Promise<T>): [T, Error | null] => {
    const [data, setData] = useState<T>(initialState);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getData = async () => {
            const fetch = await fetchData()
            setData(fetch);
        };
        getData().catch(setError)
    }, []);

    return [data, error]
};

export const useMenuData = () => {
    return useData<DishesByCategories>({}, fetchMenu)
};

export const useOpeningHours = () => {
    return useData<Array<OpeningHoursInterface>>([], fetchOpeningHours)
};

export const useHomepage = () => {
    return useData<HomepageInterface>({
        event: '',
        title: '',
        claim: '',
        caption: ''
    }, fetchHomepage)
};

export const useContact = () => {
    return useData<ContactInterface>({
        title: '',
        name: '',
        street: '',
        postal: '',
        phone: '',
        picture: null
    }, fetchContact)
};

