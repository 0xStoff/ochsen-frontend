import type * as React from "react";
import { Box, Container, Typography, useColorScheme, useMediaQuery } from "@mui/material";
import { EVENT, HOMEPAGE_CLAIM, HOMEPAGE_TITLE } from "./config/text";
import { OCHSENLOGO } from "./config/assets";
import { THEME } from "./config/theme";
import Tabs from "./components/tabs/Tabs";
import type { Themes } from "./interfaces/themes";
import { useHomepage } from "./hooks/useData";

export const Home = () => {
    const { mode } = useColorScheme();
    const [homepage, errorHomepage] = useHomepage()
    const isMd = useMediaQuery(THEME.breakpoints.up('md'));

    return (
        <Box>
            <Container sx={{
                display: "flex",
                flexDirection: isMd ? 'row' : 'column',
                height: isMd ? "100vh" : "120vh",
                width: "100vw",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <img alt={OCHSENLOGO.alt} src={OCHSENLOGO.svg[mode as Themes]} width={isMd ? 300 : 250} />
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
            </Container>
            <Tabs />
        </Box>
    )
};
