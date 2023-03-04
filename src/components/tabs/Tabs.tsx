import * as React from "react";
import type { TabPanelsType, TabRefs } from "../../interfaces/Tabs";
import { useEffect, useRef, useState } from "react";
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

    useEffect(() => {
        const ref = activeTab && tabRefs.current[activeTab];
        if (ref) {
            ref.scrollIntoView({ behavior: "smooth" });
        }
    }, [activeTab]);

    return (
        <TabsUnstyled value={activeTab}>
            <TabTitles setActiveTab={setActiveTab} />
            <TabPanels tabRefs={tabRefs} />
        </TabsUnstyled>
    );

}

