import type * as React from "react";
import { Box, Typography, useColorScheme } from "@mui/material";
import { EVENT, HOMEPAGE_CLAIM, HOMEPAGE_TITLE } from "../config/text";
import type { HomeAssetsProps } from "../interfaces/home";
import { OCHSENLOGO } from "../config/assets";
import type { Themes } from "../interfaces/themes";
import { useHomepage } from "../hooks/fetch";

export const HomeAssets: React.FC<HomeAssetsProps>
    = ({ ContainerElement }) => {
    const { mode } = useColorScheme();
    const homepage = useHomepage()

    return (
        <ContainerElement>
            <img alt={OCHSENLOGO.alt} src={OCHSENLOGO.svg[mode as Themes]} width={OCHSENLOGO.imgWidth} />
            <Box sx={{ marginLeft: 10, alignSelf: "center" }}>
                <Typography sx={{ ...EVENT.styles }} variant={EVENT.variant}>
                    {homepage.event}
                </Typography>
                <Typography sx={{ ...HOMEPAGE_TITLE.styles }} variant={HOMEPAGE_TITLE.variant}>
                    {homepage.title}
                </Typography>
                <Typography sx={{ ...HOMEPAGE_CLAIM.styles }} variant={HOMEPAGE_CLAIM.variant}>
                    {homepage.claim}
                </Typography>
            </Box>
        </ContainerElement>
    )

};
