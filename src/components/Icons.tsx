import IconButton from "@mui/material/IconButton";
import { ShoppingBag } from "@mui/icons-material";
import { ThemeButton } from "./ThemeButton";
import Typography from "@mui/material/Typography";
import { useCart } from "../context/Cart";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


export default function Icons() {
    const { cartItems } = useCart()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/*TODO: cart items shopping bag*/}
            {/*<IconButton aria-label="Warenkorb" key="cart" onClick={handleClick}>*/}
            {/*    <ShoppingBag sx={{ color: "#fff" }} />*/}
            {/*    <Typography sx={{ paddingTop: 1, color: "#fff" }} variant="caption">*/}
            {/*        {cartItems.reduce((total, item) => total + item.quantity, 0)}*/}
            {/*    </Typography>*/}
            {/*</IconButton>*/}
            <Menu
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
                open={open}
            >
                {cartItems.map(item => (
                    <MenuItem key={item.dish.id}
                              onClick={handleClose}>{item.dish.course} x {item.quantity}</MenuItem>
                ))}
            </Menu>
            <ThemeButton key="theme" />
        </>
    );
}
