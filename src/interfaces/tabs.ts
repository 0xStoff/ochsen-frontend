import type * as React from "react";
import type { Dish } from "./menu";
import type { OpeningHoursInterface } from "./opening-hours-interface";
import type { ReactElement } from "react";
import type { ContactInterface } from "./contact";

export type TabPanelsType = {
    menu: ReactElement;
    openingHours: ReactElement;
    contact: ReactElement;
};
export type TabTitlesType = keyof TabPanelsType;
export type DivWithOffsetTop = HTMLDivElement & { offsetTop?: number }
export type TabRefs = {
    // eslint-disable-next-line no-unused-vars
    [key in TabTitlesType]: DivWithOffsetTop | null;
};

export interface TabPanelProps {
    tabRefs: React.MutableRefObject<TabRefs>;
    menu: Array<Dish>;
    openingHours: Array<OpeningHoursInterface>;
    contact: ContactInterface;
}

export interface TabTitleProps {
    setActiveTab: React.Dispatch<React.SetStateAction<"" | keyof TabPanelsType>>;
}