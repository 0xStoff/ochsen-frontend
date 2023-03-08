import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Chip,
    Grid,
    IconButton,
    Tooltip,
    Typography,
    useMediaQuery
} from "@mui/material";
import type { DishesByCategories } from "../../../interfaces/menu";
import { InfoOutlined } from "@mui/icons-material";
import { MENU } from "../../../config/text";
import type React from "react";
import { THEME } from "../../../config/theme";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Menu: React.FC<{ menu: DishesByCategories }> = ({ menu }) => {
    const isSm = useMediaQuery(THEME.breakpoints.down('sm'));
    return (
        <Box>
            <Tooltip placement="right" title="Speisekarte als PDF herunterladen">
                <IconButton href={`${process.env.REACT_APP_OCHSEN_MENU_URL}`} target="_blank">
                    <InfoOutlined />
                </IconButton>
            </Tooltip>
            {Object.entries(menu).map(([key, dishes]) => (
                <Accordion key={key}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant='h3'>{key}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {dishes.map(dish => (
                                <Grid container key={dish.id} spacing={2}
                                      sx={{ borderBottom: '1px solid rgba(155,155,155,0.2)' }}>
                                    <Grid item xs={10}>
                                        <Typography variant={MENU.variant.course}>{dish.course}</Typography>
                                        <Typography variant={MENU.variant.side}>{dish.side}</Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        sx={{ display: "flex", alignSelf: "center", justifyContent: "flex-end" }}
                                        xs={2}>
                                        <Chip
                                            label={dish.price.toFixed(2)}
                                            size={isSm ? "small" : "medium"}
                                            variant="outlined"></Chip>
                                    </Grid>
                                </Grid>
                            )
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}

        </Box>
    )
}


export default Menu