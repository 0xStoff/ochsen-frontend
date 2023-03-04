import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import type { Dish } from "../../../interfaces/Menu";
import { MENU } from "../../../config/text";

const Menu = () => (
        <>
            {MENU.map((dish: Dish, index) => (
                <Box key={index}>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <Typography variant="h4">{dish.course}</Typography>
                            <Typography variant="h6">{dish.side}</Typography>
                        </Grid>
                        <Grid item sx={{ display: "flex", alignSelf: "center", justifyContent: "flex-end" }} xs={2}>
                            <Chip label={dish.price.toFixed(2)} variant="outlined"></Chip>
                        </Grid>
                    </Grid>
                    <Divider />
                </Box>
            ))}
        </>
      )
export default Menu