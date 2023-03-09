import type { CSSProperties } from "react";

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TypographyInterface {
    variant: Variant;
    styles?: CSSProperties;
}

export interface MenuInterface {
    variant: {
        course: Variant;
        side: Variant;
    };
    styles: CSSProperties;
}

// export interface OpeningHoursInterface {
//     variant: {
//         days: Variant;
//         time1: Variant;
//         time2: Variant;
//     };
//     styles: CSSProperties;
//     data: Array<{ days: string; time1: string; time2: string }>;
// }


export interface ContactInterface {
    variant: Variant;
}