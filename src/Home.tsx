import { Box, useMediaQuery } from "@mui/material";
import { LandscapeContainer, PortraitContainer } from "./styles/Home";
import { HomeAssets } from "./components/HomeAssets";
import { THEME } from "./config/theme";
import Tabs from "./components/tabs/Tabs";

export const Home = () => {
    const matches = useMediaQuery(THEME.breakpoints.up('md'));

    const getLandscapeContainer = () => (
        <HomeAssets ContainerElement={LandscapeContainer} />
    )

    const getPortraitContainer = () => (
        <HomeAssets ContainerElement={PortraitContainer} />
    )

    return (
        <Box>
            {matches ? getLandscapeContainer() : getPortraitContainer()}
            <Tabs />
        </Box>
    )
};
