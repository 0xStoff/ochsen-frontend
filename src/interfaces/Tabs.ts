import { NAVIGATION_PANELS } from "../config/components";

// export type Navigation = typeof NAVIGATION;
export type NavigationPanels = typeof NAVIGATION_PANELS;
export type DivWithOffsetTop = HTMLDivElement & { offsetTop?: number }

export type TabRefs = {
    [key in keyof NavigationPanels]: DivWithOffsetTop | null;
};
