import type { Category, PopulatedMenuResponse, ResponseArray, ResponseObject } from "../interfaces/menu";
import type { HomepageInterface } from "../interfaces/event";
import type { OpeningHoursInterface } from "../interfaces/opening-hours-interface";
import type { ContactInterface } from "../interfaces/contact";


export async function fetchContact() {
    const responseContact = await fetch(`${process.env.REACT_APP_BASE_URL}/api/contact`);
    const contactJson: ResponseObject<ContactInterface> = await responseContact.json();
    const { title, postal, street, phone, name } = contactJson.data.attributes;
    return {
        title,
        name,
        street,
        postal,
        phone,
    }
}


export async function fetchHomepage() {
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


export async function fetchOpeningHours() {
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

export async function fetchMenu() {
    const responseMenus = await fetch(`${process.env.REACT_APP_BASE_URL}/api/menus?populate=*`);
    const menuJson: ResponseArray<PopulatedMenuResponse> = await responseMenus.json();


    // Sort the menu items by category ID
    const sortedMenu = menuJson.data.sort(
        (a, b) => a.attributes.category.data.id - b.attributes.category.data.id
    );

    const categoriesById = await fetchCategories()
    return sortedMenu.map(({ id, attributes: { course, side, price, category } }) => ({
        id,
        course,
        side,
        price,
        category: categoriesById[category.data.id],
    }));
}