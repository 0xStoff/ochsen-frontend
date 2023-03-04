import * as React from "react";
import { Box, Typography } from "@mui/material";
import { CONTACT_INFORMATION } from "../../../config/text";
import { OCHSENIMAGE } from "../../../config/assets";

const Contact = () => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
            <Box sx={{ margin: 5 }}>
                {Object.entries(CONTACT_INFORMATION).map(([key, value]) =>
                    <Typography key={key} variant="h4">{value}</Typography>
                )}
            </Box>
            <img
                alt={OCHSENIMAGE.alt}
                src={OCHSENIMAGE.jpg}
                style={{ borderRadius: 10 }}
                width={OCHSENIMAGE.imgWidth}
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


export default Contact