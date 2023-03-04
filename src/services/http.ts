import type { Category, PopulatedMenuResponse, ResponseArray } from "../interfaces/menu";
import type { OpeningHoursInterface } from "../interfaces/opening-hours-interface";


export async function fetchOpeningHours() {
    const responseOpeningHours = await fetch("http://localhost:1337/api/opening-hours");
    const openingHoursJson: ResponseArray<OpeningHoursInterface> = await responseOpeningHours.json();

    return openingHoursJson.data.map(({ id, attributes: { title, subtitle1, subtitle2 } }) => ({
        id,
        title,
        subtitle1,
        subtitle2,
    }))
}


export async function fetchCategories() {
    const responseCategories = await fetch("http://localhost:1337/api/categories");
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
    const responseMenus = await fetch("http://localhost:1337/api/menus?populate=*");
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