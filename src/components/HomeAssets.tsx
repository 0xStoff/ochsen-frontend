import type * as React from "react";
import { Box, useColorScheme } from "@mui/material";
import { EVENT, HOMEPAGE_CLAIM, HOMEPAGE_TITLE } from "../config/text";
import type { HomeAssetsProps } from "../interfaces/Home";
import { OCHSENLOGO } from "../config/assets";
import type { Themes } from "../interfaces/Themes";
import { createTypographyElement } from "../utils/typography";

export const HomeAssets: React.FC<HomeAssetsProps>
    = ({ ContainerElement }) => {
    const { mode } = useColorScheme();
    return (
        <ContainerElement>
            <img alt={OCHSENLOGO.alt} src={OCHSENLOGO.svg[mode as Themes]} width={OCHSENLOGO.imgWidth} />
            <Box sx={{ marginLeft: 10, alignSelf: "center" }}>
                {createTypographyElement(HOMEPAGE_TITLE)}
                {createTypographyElement(HOMEPAGE_CLAIM)}
                {createTypographyElement(EVENT)}
            </Box>
        </ContainerElement>
    )

};
