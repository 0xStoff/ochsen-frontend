import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Chip,
    Container,
    Grid,
    IconButton,
    Tooltip,
    Typography,
    useMediaQuery
} from "@mui/material";
import { ExpandMore, InfoOutlined } from "@mui/icons-material";
import type { DishesByCategories } from "@/interfaces/menu";
import { MENU } from "@/config/text";
import type React from "react";
import { THEME } from "@/config/theme";
import { useHomepage } from "@/hooks/useData";

const TooltipPdfMenu = () => (
    <Tooltip placement="right" title="Speisekarte als PDF herunterladen">
        <IconButton href={`${process.env.REACT_APP_OCHSEN_MENU_URL}`} target="_blank">
            <InfoOutlined />
        </IconButton>
    </Tooltip>
)

const AccordionMenu: React.FC<{ menu: DishesByCategories }> = ({ menu }) => {
    const isSm = useMediaQuery(THEME.breakpoints.down('sm'));

    return (
        <>
            {Object.entries(menu).map(([key, dishes]) => (
                <Accordion key={key}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                    >
                        <Typography variant='h3'>{key}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {dishes.map(dish => (
                                <Grid container key={dish.id}
                                      sx={{ alignItems: 'center', borderBottom: '1px solid rgba(155,155,155,0.2)' }}>
                                    <Grid item sm={10} xs={9}>
                                        <Typography variant={MENU.variant.course}>{dish.course}</Typography>
                                        <Typography variant={MENU.variant.side}>{dish.side}</Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
                                        xs={3}>
                                        <Chip
                                            label={dish.price.toFixed(2)}
                                            size={isSm ? "small" : "medium"}
                                            sx={{ maxWidth: '100%' }}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            )
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    )
}


const Menu: React.FC<{ menu: DishesByCategories }> = ({ menu }) => {
    const [homepage] = useHomepage();
    return (
        <Box>
            <TooltipPdfMenu />
            <AccordionMenu menu={menu} />
            <Container sx={{ marginTop: 3 }}>
                <Typography variant='caption'>{homepage.caption}</Typography>
            </Container>
        </Box>
    )
}

export default Menu;