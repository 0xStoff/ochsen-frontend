import { Box, Divider, Typography } from "@mui/material";
import { OPENING_HOURS } from "../../../config/text";

const OpeningHours = () => (
    <>
        {OPENING_HOURS.map((open, index) => (
            <Box key={index}>
                <Typography variant="h4">{open.days}</Typography>
                <Typography variant="h6">{open.time1}</Typography>
                <Typography variant="h6">{open.time2}</Typography>
                <Divider sx={{ marginY: 2 }} />
            </Box>
        ))}
    </>
)

export default OpeningHours