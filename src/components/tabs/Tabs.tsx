import * as React from "react";
import type { TabPanelsType, TabRefs } from "@interfaces/tabs";
import { useContact, useMenuData, useOpeningHours } from "@hooks/useData";
import { useEffect, useRef, useState } from "react";
import ErrorSnackbar from "@components/ErrorSnackbar";
import TabPanels from "@tabs/TabPanels";
import TabTitles from "@tabs/TabTitles";
import TabsUnstyled from '@mui/base/TabsUnstyled';


export default function Tabs() {
    const tabRefs = useRef<TabRefs>({
        menu: null,
        openingHours: null,
        contact: null
    });
    const [activeTab, setActiveTab] = useState<keyof TabPanelsType | ''>('');

    const [menu, errorMenu] = useMenuData()
    const [openingHours, errorOpeningHours] = useOpeningHours()
    const [contact, errorContact] = useContact()


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
            <ErrorSnackbar error={errorMenu || errorContact || errorOpeningHours} />
        </TabsUnstyled>
    );

}

