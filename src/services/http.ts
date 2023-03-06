import type { Category, Dish, PopulatedMenuResponse, ResponseArray, ResponseObject } from "@/interfaces/menu";
import type { HomepageInterface } from "@/interfaces/event";
import type { OpeningHoursInterface } from "@/interfaces/opening-hours-interface";
import type { PopulatedContactInterface } from "@/interfaces/contact";


export async function fetchContact(): Promise<PopulatedContactInterface> {
    try {
        const responseContact = await fetch(`${process.env.REACT_APP_BASE_URL}/api/contact?populate=*`);
        const contactJson: ResponseObject<PopulatedContactInterface> = await responseContact.json();
        const { title, postal, street, phone, name, picture } = contactJson.data.attributes;

        return {
            title,
            name,
            street,
            postal,
            phone,
            picture
        }
    } catch (error) {
        console.error(error);
        throw new Error("error fetching contact");
    }
}


export async function fetchHomepage(): Promise<HomepageInterface & { id: number }> {
    try {
        const responseEvent = await fetch(`${process.env.REACT_APP_BASE_URL}/api/homepage`);
        const eventJson: ResponseObject<HomepageInterface> = await responseEvent.json();
        const { title, claim, event } = eventJson.data.attributes;
        return {
            id: eventJson.id,
            event,
            title,
            claim
        }
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


export async function fetchCategories() {
    try {
        const responseCategories = await fetch(`${process.env.REACT_APP_BASE_URL}/api/categories`);
        const categoriesJson: ResponseArray<Category> = await responseCategories.json();

        // Create a map of category IDs to their corresponding categories
        return categoriesJson.data.reduce(
            (acc: Record<number, string | null>, { id, attributes: { category } }) => {
                acc[id] = category;
                return acc;
            },
            {}
        );
    } catch (error) {
        console.error(error);
        throw new Error("error fetching categories");
    }
}

export async function fetchMenu(): Promise<Array<Dish & Category>> {
    try {

        const responseMenus = await fetch(`${process.env.REACT_APP_BASE_URL}/api/menus?populate=*`);
        const menuJson: ResponseArray<PopulatedMenuResponse> = await responseMenus.json();
        // Sort the menu items by category ID
        // crashing when no ID but relation is not required in backend
        // const sortedMenu = menuJson.data.sort(
        //     (a, b) => a.attributes.category.data.id - b.attributes.category.data.id
        // );
        const categoriesById = await fetchCategories()

        return menuJson.data.map(({ id, attributes: { course, side, price, category } }) => ({
            id,
            course,
            side,
            price,
            category: category.data ? categoriesById[category.data.id] : null,
        }));
    } catch (error) {
        console.error(error);
        throw new Error("error fetching menu");
    }
}