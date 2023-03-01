import { Box, Container, Divider, Typography, useColorScheme } from "@mui/material";
import { HOMEPAGE_CLAIM, HOMEPAGE_TITLE } from "../config/text";
import BasicTabs from "./BasicTabs";
import { OCHSENLOGO } from "../config/assets";
import { Themes } from "../interfaces/Themes";


export const Home = () => {
    const { mode } = useColorScheme();
    const theme = mode as Themes;
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Container sx={{ display: "flex", height: "100vh" }}>
                <img alt={OCHSENLOGO.alt} width={OCHSENLOGO.imgWidth} src={OCHSENLOGO.svg[theme]}/>
                <Divider sx={{ background: "#fff", margin: 5 }} orientation="vertical" flexItem/>
                <Box sx={{ alignSelf: "center" }}>
                    <Typography variant="h1">{HOMEPAGE_TITLE}</Typography>
                    <Typography variant="h5">{HOMEPAGE_CLAIM}</Typography>
                </Box>
            </Container>
            <BasicTabs/>
        </Box>

    )
};