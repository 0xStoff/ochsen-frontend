import type * as React from "react";
import type { ReactElement } from "react";

export type TabPanelsType = {
    menu: ReactElement;
    openingHours: ReactElement;
    contact: ReactElement;
};
export type TabTitlesType = keyof TabPanelsType;
export type DivWithOffsetTop = HTMLDivElement & { offsetTop?: number }
export type TabRefs = {
    [key in TabTitlesType]: DivWithOffsetTop | null;
};

export interface TabPanelProps {
    tabRefs: React.MutableRefObject<TabRefs>;
}

export interface TabTitleProps {
    setActiveTab: React.Dispatch<React.SetStateAction<"" | keyof TabPanelsType>>;
}