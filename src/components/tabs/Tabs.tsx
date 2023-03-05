import * as React from "react";
import type { TabPanelsType, TabRefs } from "../../interfaces/tabs";
import { useEffect, useRef, useState } from "react";
import { useContact, useMenuData, useOpeningHours } from "../../hooks/useData";
import TabPanels from "./TabPanels";
import TabTitles from "./TabTitles";
import TabsUnstyled from '@mui/base/TabsUnstyled';


export default function Tabs() {
    const tabRefs = useRef<TabRefs>({
        menu: null,
        openingHours: null,
        contact: null
    });
    const [activeTab, setActiveTab] = useState<keyof TabPanelsType | ''>('');

    const menu = useMenuData()
    const openingHours = useOpeningHours()
    const contact = useContact()

    useEffect(() => {
        const ref = activeTab && tabRefs.current[activeTab];
        if (ref) {
            ref.scrollIntoView({ behavior: "smooth" });
        }
    }, [activeTab]);

    return (
        <TabsUnstyled value={activeTab}>
            <TabTitles setActiveTab={setActiveTab} />
            <TabPanels contact={contact} menu={menu} openingHours={openingHours} tabRefs={tabRefs} />
        </TabsUnstyled>
    );

}

