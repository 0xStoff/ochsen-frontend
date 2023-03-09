import type * as React from "react";
import { StickyTabsListStyle, TabStyle } from "@styles/Tabs";
import type { TabPanelsType, TabTitleProps } from "@interfaces/tabs";
import { TAB_TITLES } from "@config/text";
import { ThemeButton } from "@components/ThemeButton";

const TabTitles: React.FC<TabTitleProps> = ({ setActiveTab }) => (
    <StickyTabsListStyle>
        {Object.entries(TAB_TITLES).map(([key, value]) => (
            <TabStyle
                key={key}
                onClick={() => {
                    setActiveTab(key as keyof TabPanelsType);
                }}
                value={key}
            >
                {value}
            </TabStyle>
        ))}
        <ThemeButton key="theme" />
    </StickyTabsListStyle>
)

export default TabTitles

