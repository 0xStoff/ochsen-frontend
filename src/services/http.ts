import type { Category, Dish, PopulatedMenuResponse, ResponseArray, ResponseObject } from "../interfaces/menu";
import type { HomepageInterface } from "../interfaces/event";
import type { OpeningHoursInterface } from "../interfaces/opening-hours-interface";
import type { PopulatedContactInterface } from "../interfaces/contact";


export async function fetchContact(): Promise<PopulatedContactInterface> {
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
}


export async function fetchHomepage(): Promise<HomepageInterface & { id: number }> {
    const responseEvent = await fetch(`${process.env.REACT_APP_BASE_URL}/api/homepage`);
    const eventJson: ResponseObject<HomepageInterface> = await responseEvent.json();
    const { title, claim, event } = eventJson.data.attributes;
    return {
        id: eventJson.id,
        event,
        title,
        claim
    }
}


export async function fetchOpeningHours(): Promise<Array<OpeningHoursInterface & { id: number }>> {
    const responseOpeningHours = await fetch(`${process.env.REACT_APP_BASE_URL}/api/opening-hours`);
    const openingHoursJson: ResponseArray<OpeningHoursInterface> = await responseOpeningHours.json();

    return openingHoursJson.data.map(({ id, attributes: { title, subtitle1, subtitle2 } }) => ({
        id,
        title,
        subtitle1,
        subtitle2,
    }))
}


export async function fetchCategories() {
    const responseCategories = await fetch(`${process.env.REACT_APP_BASE_URL}/api/categories`);
    const categoriesJson: ResponseArray<Category> = await responseCategories.json();

    // Create a map of category IDs to their corresponding categories
    return categoriesJson.data.reduce(
        (acc: Record<number, string>, { id, attributes: { category } }) => {
            acc[id] = category;
            return acc;
        },
        {}
    );
}

export async function fetchMenu(): Promise<Array<Dish & Category>> {
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
        category: category.data ? categoriesById[category.data.id] : '',
    }));
}