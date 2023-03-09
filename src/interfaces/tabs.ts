import type * as React from "react";
import type { ContactInterface } from "@interfaces/contact";
import type { DishesByCategories } from "@interfaces/menu";
import type { OpeningHoursInterface } from "@interfaces/opening-hours-interface";
import type { ReactElement } from "react";

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
    menu: DishesByCategories;
    openingHours: Array<OpeningHoursInterface>;
    contact: ContactInterface;
}

export interface TabTitleProps {
    setActiveTab: React.Dispatch<React.SetStateAction<"" | keyof TabPanelsType>>;
}