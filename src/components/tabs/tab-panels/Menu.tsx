import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import type { Dish } from "../../../interfaces/menu";
import { MENU } from "../../../config/text";
import type React from "react";


const Menu: React.FC<{ menu: Array<Dish> }> = ({ menu }) => (
    <>
        {menu.map((dish: Dish, index) => (
            <Box key={index}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Typography variant={MENU.variant.course}>{dish.course}</Typography>
                        <Typography variant={MENU.variant.side}>{dish.side}</Typography>
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