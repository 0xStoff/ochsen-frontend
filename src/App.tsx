import { Container, CssBaseline, Typography } from "@mui/material";
import { HOMEPAGE_CLAIM, HOMEPAGE_TITLE, } from "./config/text";
import { useEffect, useRef } from "react";
import { AnimeInstance } from "animejs";
import { OCHSENLOGO } from "./config/assets";
import { THEME } from "./config/theme";
import { ThemeProvider } from "@mui/material/styles";
import anime from 'animejs/lib/anime.es.js';


export default function App() {
    const animationRef = useRef<AnimeInstance | null>(null);

    useEffect(() => {
        animationRef.current = anime({
            targets: '.el',
            easing: 'easeInExpo',
            duration: 1500,
            scale: 2,
            direction: 'alternate',
        });
    }, []);

    return (
        <ThemeProvider theme={THEME}>
            <CssBaseline/>
            <Container className="target">
                <Typography variant="h1">{HOMEPAGE_TITLE}</Typography>
                <Typography variant="h2">{HOMEPAGE_CLAIM}</Typography>
                <Container className="el" sx={OCHSENLOGO.style}>
                    <img alt={OCHSENLOGO.alt} width={OCHSENLOGO.imgWidth} src={OCHSENLOGO.svg}/>
                </Container>
            </Container>
        </ThemeProvider>
    );
}
