import type * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import type { OpeningHoursInterface } from "@/interfaces/opening-hours-interface";

const OpeningHours: React.FC<{ openingHours: Array<OpeningHoursInterface> }> = ({ openingHours }) => (
    <>
        {openingHours.map((open, index) => (
            <Box key={index}>
                <Typography variant="h3">{open.title}</Typography>
                <Typography variant="h6">{open.subtitle1}</Typography>
                <Typography variant="h6">{open.subtitle2}</Typography>
                <Divider sx={{ marginY: 2 }} />
            </Box>
        ))}
    </>
)


export default OpeningHours