import type * as React from "react";
import type { DivWithOffsetTop, TabPanelProps, TabTitlesType } from "../../interfaces/tabs";
import { Container } from "@mui/material";
import { TAB_PANELS } from "../../config/components";
import { TabPanelStyle } from "../../styles/Tabs";


const TabPanels: React.FC<TabPanelProps> = ({ tabRefs, menu, openingHours }) => (
    <Container>
        {Object.entries(TAB_PANELS(menu, openingHours)).map(([key, element]) => (
            <TabPanelStyle
                key={key}
                ref={(el: DivWithOffsetTop) => {
                    tabRefs.current[key as TabTitlesType] = el;
                }}
                value={key as TabTitlesType}
            >
                {element}
            </TabPanelStyle>
        ))}
    </Container>
)

export default TabPanels
