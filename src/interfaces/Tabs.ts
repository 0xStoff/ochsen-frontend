import { ReactElement } from "react";

export type NavigationPanels = {
    menu: ReactElement;
    openingHours: ReactElement;
    contact: ReactElement;
};
export type DivWithOffsetTop = HTMLDivElement & { offsetTop?: number }

export type TabRefs = {
    [key in keyof NavigationPanels]: DivWithOffsetTop | null;
};
