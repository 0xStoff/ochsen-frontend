import { Box, useMediaQuery } from "@mui/material";
import { LandscapeContainer, PortraitContainer } from "./styles/Home";
import BasicTabs from "./components/BasicTabs";
import { HomeAssets } from "./components/HomeAssets";
import React from "react";
import { THEME } from "./config/theme";

export const Home = () => {
    const matches = useMediaQuery(THEME.breakpoints.up('md'));

    const getLandscapeContainer = () => (
        <LandscapeContainer>
            <HomeAssets dividerOrientation="vertical" />
        </LandscapeContainer>
    )

    const getPortraitContainer = () => (
        <PortraitContainer>
            <HomeAssets dividerOrientation="horizontal" />
        </PortraitContainer>
    )

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {matches ? getLandscapeContainer() : getPortraitContainer()}
            <BasicTabs />
        </Box>
    )
};
