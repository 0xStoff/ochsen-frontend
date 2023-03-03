import * as React from "react";
import { Box, Divider, Typography, useColorScheme } from "@mui/material";
import { HOMEPAGE_CLAIM, HOMEPAGE_TITLE } from "../config/text";
import { HomeAssetsProps } from "../interfaces/Home";
import { OCHSENLOGO } from "../config/assets";
import { Themes } from "../interfaces/Themes";

export const HomeAssets: React.FC<HomeAssetsProps> = ({ dividerOrientation }) => { // specify the type of HomeAssets component props
    const { mode } = useColorScheme();
    return (
        <>
            <img alt={OCHSENLOGO.alt} src={OCHSENLOGO.svg[mode as Themes]} width={OCHSENLOGO.imgWidth} />
            <Divider flexItem orientation={dividerOrientation} sx={{ background: "#fff", margin: 5 }} />
            <Box sx={{ alignSelf: "center" }}>
                <Typography variant="h1">{HOMEPAGE_TITLE}</Typography>
                <Typography variant="h5">{HOMEPAGE_CLAIM}</Typography>
            </Box>
        </>
    );
};