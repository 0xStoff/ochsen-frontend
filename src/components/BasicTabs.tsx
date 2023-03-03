import * as React from "react";
import { DivWithOffsetTop, NavigationPanels, TabRefs } from "../interfaces/Tabs";
import { StickyTabsList, StickyTabsListIcons, Tab, TabPanel } from "../styles/Tabs";
import { useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";
import { NAVIGATION } from "../config/text";
import { NAVIGATION_PANELS } from "../config/components";
import TabsUnstyled from '@mui/base/TabsUnstyled';
import { ThemeButton } from "./ThemeButton";


export default function BasicTabs() {
    const tabRefs = useRef<TabRefs>({
        menu: null,
        openingHours: null,
        contact: null,
    });

    const [activeTab, setActiveTab] = useState<keyof NavigationPanels>(
        Object.keys(NAVIGATION_PANELS)[0] as keyof NavigationPanels
    );

    useEffect(() => {
        const ref = tabRefs.current[activeTab];
        if (ref) {
            ref.scrollIntoView({ behavior: "smooth" });
        }
    }, [activeTab]);

    const stickyTabs = Object.entries(NAVIGATION).map(([key, value]) => (
        <Tab
            key={key}
            onClick={() => {
                setActiveTab(key as keyof NavigationPanels);
            }}
            value={key}
        >
            {value}
        </Tab>
    ));

    const tabPanels = Object.entries(NAVIGATION_PANELS).map(([key, element]) => (
        <TabPanel
            key={key}
            ref={(el: DivWithOffsetTop) => {
                tabRefs.current[key as keyof NavigationPanels] = el;
            }}
            value={key as keyof NavigationPanels}
        >
            {element}
        </TabPanel>
    ));

    return (
        <TabsUnstyled value={activeTab}>
            <StickyTabsList>{stickyTabs}</StickyTabsList>
            <StickyTabsListIcons><ThemeButton key="theme" /></StickyTabsListIcons>
            <Container sx={{ marginY: 5 }}>{tabPanels}</Container>
        </TabsUnstyled>
    );
}
