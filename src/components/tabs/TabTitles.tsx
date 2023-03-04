import type * as React from "react";
import { StickyTabsListStyle, TabStyle } from "../../styles/Tabs";
import type { TabPanelsType, TabTitleProps } from "../../interfaces/Tabs";
import { IconButton } from "@mui/material";
import { PriorityHigh } from "@mui/icons-material";
import { TAB_TITLES } from "../../config/text";
import { ThemeButton } from "../ThemeButton";

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
        <IconButton aria-label="Event Button" sx={{ color: "#fff" }}>
            <PriorityHigh />
        </IconButton>
    </StickyTabsListStyle>
)

export default TabTitles

