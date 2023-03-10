import * as React from "react";
import { Badge, Box, Container, IconButton, Popover, Typography } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";

export default function ShoppingCart() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <>
            <IconButton aria-label="Warenkorb" key="cart" onClick={handleClick}>
                <ShoppingBag sx={{ color: "#fff" }} />
                <Typography sx={{ paddingTop: 1, color: "#fff" }} variant="caption">
                    0
                </Typography>
            </IconButton>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                id={id}
                onClose={handleClose}
                open={open}
            >
                <Container sx={{ p: 5 }}>
                    <Badge badgeContent={2} color="primary">
                        <Typography variant='h5'>Grüner Salat</Typography>
                    </Badge>
                    {/*<Chip color='secondary' label={1} size='small' variant="outlined"></Chip>*/}
                    <Box>
                        <Typography variant='h5'>Cordon bleu vom Schwein</Typography>
                        <Typography variant='caption'>Pommes frites, Gemüsegarniture</Typography>
                    </Box>
                    <Box>
                        <Typography variant='h5'>Schnitzel</Typography>
                        <Typography variant='caption'>Pommes frites</Typography>
                    </Box>

                </Container>
            </Popover>
        </>
    )


}

