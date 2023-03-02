import { IconButton, Typography } from "@mui/material";
import { StickyTabsList, Tab, TabPanel } from "../config/styles";
import { NAVIGATION } from "../config/text";
import { NAVIGATION_PANELS } from "../config/components";
import { ShoppingBag } from "@mui/icons-material";
import TabsUnstyled from '@mui/base/TabsUnstyled';
import { ThemeButton } from "./ThemeButton";


export default function UnstyledTabsIntroduction() {
    const getTabs = (
        navigation: typeof NAVIGATION | typeof NAVIGATION_PANELS,
        Component: typeof Tab | typeof TabPanel) => {
        return Object.entries(navigation).map(([key, value], index) => (
            <Component key={key} value={index}>{value}</Component>
        ));
    };

    const getStickyTabs = () => (getTabs(NAVIGATION, Tab));
    const getTabsPanels = () => (getTabs(NAVIGATION_PANELS, TabPanel));

    return (
        <TabsUnstyled defaultValue={0}>
            <StickyTabsList>
                {getStickyTabs()}
                <IconButton aria-label="Warenkorb">
                    <ShoppingBag/>
                    <Typography sx={{ paddingTop: 1 }} variant="caption">3</Typography>
                </IconButton>
                <ThemeButton/>
            </StickyTabsList>
            {getTabsPanels()}
        </TabsUnstyled>
    );
}
