import type { CSSProperties } from "react";

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TypographyInterface {
    text: string;
    variant: Variant;
    styles?: CSSProperties;
}
