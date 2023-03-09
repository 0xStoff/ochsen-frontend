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
            path: string;
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
            path: string;
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
    previewUrl: string;
    provider: string;
    provider_metadata: string;
    createdAt: string;
    updatedAt: string;
}

export type ContactInterface = {
    title: string;
    name: string;
    street: string;
    postal: string;
    phone: string;
    picture: PictureInterface | null;
}


