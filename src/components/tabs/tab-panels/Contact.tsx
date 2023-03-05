import type * as React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { CONTACT_INFORMATION } from "../../../config/text";
import type { ContactInterface } from "../../../interfaces/contact";
import { OCHSENIMAGE } from "../../../config/assets";
import { THEME } from "../../../config/theme";

const Contact: React.FC<{ contact: ContactInterface }> = ({ contact }) => {
    const isMd = useMediaQuery(THEME.breakpoints.up('md'));
    const isSm = useMediaQuery(THEME.breakpoints.up('sm'));
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3, flexDirection: isMd ? 'row' : 'column' }}>
                <Box sx={{ margin: 5 }}>
                    {Object.entries(contact).map(([key, value]) =>
                        <Typography key={key} variant={CONTACT_INFORMATION.variant}>{value}</Typography>
                    )}
                </Box>
                <img
                    alt={OCHSENIMAGE.alt}
                    src={OCHSENIMAGE.jpg}
                    style={{ borderRadius: 10 }}
                    width={isSm ? 500 : 350}
                />
            </Box>
            <iframe
                allowFullScreen
                height="450"
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/search?q=Ochsen,+Oberdorf,+Beringen,+Switzerland&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                style={{ height: '70vh', width: '100%', borderRadius: 10, border: 0 }}
            />
        </Box>
    )
}


export default Contact