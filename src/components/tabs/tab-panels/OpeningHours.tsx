import type * as React from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import type { OpeningHoursInterface } from "@/interfaces/opening-hours-interface";

const dayOrder = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
const todayIndex = new Date().getDay();
const currentDay = dayOrder[todayIndex === 0 ? 6 : todayIndex - 1];

const OpeningHours: React.FC<{ openingHours: Array<OpeningHoursInterface> }> = ({ openingHours }) => {
    const theme = useTheme();

    const highlightDayClass = (open: OpeningHoursInterface) => {
        return {
            backgroundColor: open.title === currentDay
                ? theme.palette.mode === 'dark'
                    ? '#2c2f33'
                    : '#c9e2ff'
                : 'inherit',
            padding: 2,
            borderRadius: 1,
            color: open.title === currentDay
                ? theme.palette.mode === 'dark'
                    ? '#fff'
                    : '#000'
                : 'inherit',
        };
    };

    return (
        <>
            {openingHours.map((open, index) => (
                <div key={index}>
                <Box sx={highlightDayClass(open)}>
                    <Typography variant="h3">{open.title}</Typography>
                    <Typography variant="h6">{open.subtitle1}</Typography>
                    <Typography variant="h6">{open.subtitle2}</Typography>
                </Box>
                    <Divider sx={{ marginY: 2 }} /></div>
            ))}
        </>
    );
};

export default OpeningHours;