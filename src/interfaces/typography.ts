import type { CSSProperties } from "react";
import type { Dish } from "./menu";

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TypographyInterface {
    text: string;
    variant: Variant;
    styles?: CSSProperties;
}

export interface MenuInterface {
    variant: {
        course: Variant;
        side: Variant;
    };
    styles: CSSProperties;
    data: Array<Dish>;
}

export interface OpeningHoursInterface {
    variant: {
        days: Variant;
        time1: Variant;
        time2: Variant;
    };
    styles: CSSProperties;
    data: Array<{ days: string; time1: string; time2: string }>;
}


export interface ContactInterface {
    variant: Variant;
    data: {
        title: string;
        name: string;
        street: string;
        postal: string;
        phone: string;
    };
}