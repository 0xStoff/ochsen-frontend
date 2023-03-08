import type * as React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { CONTACT_INFORMATION } from "../../../config/text";
import type { ContactInterface } from "@/interfaces/contact";
import { THEME } from "../../../config/theme";

const Contact: React.FC<{ contact: ContactInterface }> = ({ contact }) => {
    const isMd = useMediaQuery(THEME.breakpoints.up('md'));

    const { picture, ...contactData } = contact;

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginBottom: 3,
                flexDirection: isMd ? 'row' : 'column'
            }}>
                <Container sx={{ padding: 5 }}>
                    {Object.entries(contactData).map(([key, value]) =>
                        <Typography key={key} variant={CONTACT_INFORMATION.variant}>{value}</Typography>
                    )}
                </Container>
                <img
                    alt={picture?.alternativeText}
                    src={`${process.env.REACT_APP_BASE_URL}${contact.picture?.url}`}
                    style={{ borderRadius: 10, width: isMd ? "50%" : "100%" }}
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