import type { DishesByCategories, ResponseArray } from "@interfaces/menu";
import type { ContactInterface } from "@interfaces/contact";
import type { HomepageInterface } from "@interfaces/event";
import type { OpeningHoursInterface } from "@interfaces/opening-hours-interface";


export async function fetchContact(): Promise<ContactInterface> {
    try {
        const responseContact = await fetch(`${process.env.REACT_APP_BASE_URL}/api/contact`);
        return await responseContact.json()
    } catch (error) {
        console.error(error);
        throw new Error("error fetching contact");
    }
}


export async function fetchHomepage(): Promise<HomepageInterface & { id: number }> {
    try {
        const responseEvent = await fetch(`${process.env.REACT_APP_BASE_URL}/api/homepage`);
        return await responseEvent.json();
    } catch (error) {
        console.error(error);
        throw new Error("error fetching homepage");
    }
}


export async function fetchOpeningHours(): Promise<Array<OpeningHoursInterface & { id: number }>> {
    try {
        const responseOpeningHours = await fetch(`${process.env.REACT_APP_BASE_URL}/api/opening-hours`);
        const openingHoursJson: ResponseArray<OpeningHoursInterface> = await responseOpeningHours.json();
        return openingHoursJson.data.map(({ id, attributes: { title, subtitle1, subtitle2 } }) => ({
            id,
            title,
            subtitle1,
            subtitle2,
        }))
    } catch (error) {
        console.error(error);
        throw new Error("error fetching opening hours");
    }
}

export async function fetchMenu(): Promise<DishesByCategories> {
    try {
        const responseMenus = await fetch(`${process.env.REACT_APP_BASE_URL}/api/menus?populate=*`);
        return await responseMenus.json();
    } catch (error) {
        console.error(error);
        throw new Error("error fetching menu");
    }
}