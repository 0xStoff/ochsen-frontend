import type * as React from "react";
import { Box, Typography, useColorScheme } from "@mui/material";
import { EVENT, HOMEPAGE_CLAIM, HOMEPAGE_TITLE } from "../config/text";
import type { HomeAssetsProps } from "../interfaces/home";
import { OCHSENLOGO } from "../config/assets";
import type { Themes } from "../interfaces/themes";
import type { TypographyInterface } from "../interfaces/typography";

export const HomeAssets: React.FC<HomeAssetsProps>
    = ({ ContainerElement }) => {
    const { mode } = useColorScheme();
    const
        createTypographyElement = ({ variant, text, styles }: TypographyInterface) => (
        <Typography sx={{ ...styles }} variant={variant}>
            {text}
        </Typography>
    );

    return (
        <ContainerElement>
            <img alt={OCHSENLOGO.alt} src={OCHSENLOGO.svg[mode as Themes]} width={OCHSENLOGO.imgWidth} />
            <Box sx={{ marginLeft: 10, alignSelf: "center" }}>
                {createTypographyElement(EVENT)}
                {createTypographyElement(HOMEPAGE_TITLE)}
                {createTypographyElement(HOMEPAGE_CLAIM)}
            </Box>
        </ContainerElement>
    )

};
