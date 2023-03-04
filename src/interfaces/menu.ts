export interface Dish {
    course: string;
    side: string | null;
    price: number;
}

export interface Category {
    category: string;
}

export interface ResponseArray<T> {
    data: Array<{
        id: number;
        attributes: T;
    }>;
}

export interface ResponseObject<T> {
    id: number;
    data: {
        attributes: T;
    };
}

export interface PouplatedResponseObject<T> {
    data: {
        id: number;
        attributes: T;
    };
}

export type PopulatedMenuResponse = Dish & {
    category: PouplatedResponseObject<Category>;
}
