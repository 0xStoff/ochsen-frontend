import IconButton from "@mui/material/IconButton";
import { ShoppingBag } from "@mui/icons-material";
import { ThemeButton } from "./ThemeButton";
import Typography from "@mui/material/Typography";
import { useCart } from "../context/Cart";


export default function Icons() {
    const { cartItems } = useCart()
    return (
        <>
            <IconButton aria-label="Warenkorb" key="cart">
                <ShoppingBag sx={{ color: "#fff" }} />
                <Typography sx={{ paddingTop: 1, color: "#fff" }} variant="caption">
                    {cartItems.length}
                </Typography>
            </IconButton>
            <ThemeButton key="theme" />
        </>
    );
}
