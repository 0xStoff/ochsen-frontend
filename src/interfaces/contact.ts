import type { PopulatedResponseObject } from "./menu";

export type ContactInterface = {
    title: string;
    name: string;
    street: string;
    postal: string;
    phone: string;
}

export type PictureInterface = {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
        thumbnail: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: any;
            width: number;
            height: number;
            size: number;
            url: string;
        };
        small: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: any;
            width: number;
            height: number;
            size: number;
            url: string;
        };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
}

export type PopulatedContactInterface = {
    title: string;
    name: string;
    street: string;
    postal: string;
    phone: string;
    picture: PopulatedResponseObject<PictureInterface> | null;
}


