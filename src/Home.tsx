import { Box, Container, Divider, Typography, useColorScheme, useMediaQuery } from "@mui/material";
import { HOMEPAGE_CLAIM, HOMEPAGE_TITLE } from "./config/text";
import BasicTabs from "./components/BasicTabs";
import { OCHSENLOGO } from "./config/assets";
import { THEME } from "./config/theme";
import { Themes } from "./interfaces/Themes";


export const Home = () => {
    const { mode } = useColorScheme();
    const theme = mode as Themes;
    const matches = useMediaQuery(THEME.breakpoints.up('md'));


    const getLandscapeContainer = () => (
        <Container sx={{ display: "flex", height: "100vh" }}>
            <img alt={OCHSENLOGO.alt} src={OCHSENLOGO.svg[theme]} width={OCHSENLOGO.imgWidth} />
            <Divider flexItem orientation="vertical" sx={{ background: "#fff", margin: 5 }} />
            <Box sx={{ alignSelf: "center" }}>
                <Typography variant="h1">{HOMEPAGE_TITLE}</Typography>
                <Typography variant="h5">{HOMEPAGE_CLAIM}</Typography>
            </Box>
        </Container>
    )

    const getPortraitContainer = () => (
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "80vh", marginTop: 5 }}>
            <img alt={OCHSENLOGO.alt} src={OCHSENLOGO.svg[theme]} width={OCHSENLOGO.imgWidth} />
            <Divider flexItem orientation="horizontal" sx={{ background: "#fff", margin: 5 }} />
            <Box sx={{ alignSelf: "center" }}>
                <Typography variant="h1">{HOMEPAGE_TITLE}</Typography>
                <Typography variant="h5">{HOMEPAGE_CLAIM}</Typography>
            </Box>
        </Container>
    )

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {matches ? getLandscapeContainer() : getPortraitContainer()}
            <BasicTabs />
        </Box>
    )
};
