import { Box, Divider, Typography } from "@mui/material";
import { OPENING_HOURS } from "../../config/text";

const OpeningHours = () => (
    <>
        {OPENING_HOURS.map((open, index) => (
            <Box key={index}>
                <Typography variant="h2">{open.days}</Typography>
                <Typography variant="h5">{open.time1}</Typography>
                <Typography variant="h5">{open.time2}</Typography>
                <Divider sx={{ marginY: 5 }} />
            </Box>
        ))}
    </>
)

export default OpeningHours