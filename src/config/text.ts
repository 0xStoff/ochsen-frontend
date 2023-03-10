import type { ContactInterface, MenuInterface, TypographyInterface } from "@interfaces/typography";
import { ThemeButton } from "@components/ThemeButton";
import ShoppingCart from "@tabs/ShoppingCart";
import * as React from "react";

export const HOMEPAGE_TITLE: TypographyInterface = { variant: "h1" }
export const HOMEPAGE_CLAIM: TypographyInterface = { variant: "h5" }
export const EVENT: TypographyInterface = {
    variant: "h2",
    styles: {
        color: "#e57373",
    }
}
export const TAB_TITLES = {
    menu: "Speisekarte",
    openingHours: "Öffnungszeiten",
    contact: "Kontakt",
}
export const CONTACT_INFORMATION: ContactInterface = {
    variant: 'h3',
}

export const MENU: MenuInterface = {
    variant: {
        course: 'h4',
        side: 'h6'
    },
    styles: {},
}