export interface Dish {
    id: number;
    course: string;
    side: string | null;
    price: number;
    category: string | null;
}

// export interface Category {
//     category: string | null;
// }

export interface ResponseArray<T> {
    data: Array<T>;
}


// export interface ResponseObject<T> {
//     id: number;
//     data: {
//         attributes: T;
//     };
// }

// export interface PopulatedResponseObject<T> {
//     data: {
//         id: number;
//         attributes: T;
//     };
// }
//
// export type PopulatedMenuResponse = Dish & {
//     category: PopulatedResponseObject<Category>;
// }

export type DishesByCategories = { [key: string]: Array<Dish> }
