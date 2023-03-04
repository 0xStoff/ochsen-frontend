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
    data: {
        id: number;
        attributes: T;
    };
}

export type PopulatedMenuResponse = Dish & {
    category: ResponseObject<Category>;
}
