import { Box, Typography } from "@mui/material";

// const TypoBox: FC<{ children: ReactNode }> = ({ children }) => {
//     return <Box sx={{ display: "flex", justifyContent: "space-evenly", marginTop: 10 }}>{children}</Box>;
// }

export default function OpeningHours() {
    return (
        <Box>
            <Typography variant="h1">Montag bis Freitag</Typography>
            <Typography variant="h2">8.45 - 13.30 <br/> ab 17.00</Typography>

            <Typography marginTop={5} variant="h1">Samstag</Typography>
            <Typography variant="h2">ab 17.00</Typography>

            <Typography marginTop={5} variant="h1">Sonntag Geschlossen</Typography>
            <Typography variant="h2">Weitere Öffnungszeiten auf Anfrage</Typography>
        </Box>
    );
}
