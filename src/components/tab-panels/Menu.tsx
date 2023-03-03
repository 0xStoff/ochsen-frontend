import { Add, Remove } from "@mui/icons-material";
import { Box, Chip, Divider, Grid, IconButton, Typography } from "@mui/material";
import { Dish } from "../../interfaces/Menu";
import { MENU } from "../../config/text";
import { useCart } from "../../context/Cart";


function AddAndRemove({ dish }: { dish: Dish }) {
    const { cartItems, setCartItems } = useCart()

    const addToCart = () => {
        const index = cartItems.findIndex(item => item.dish.id === dish.id);
        if (index === -1) {
            setCartItems(prevCartItems => [...prevCartItems, { dish, quantity: 1 }]);
        } else {
            const updatedCartItems = [...cartItems];
            updatedCartItems[index].quantity++;
            setCartItems(updatedCartItems);
        }
    };
    // const removeFromCart = () => {
    //     setCartItems(prevCartItems =>
    //         prevCartItems.filter(item => item.dish.id !== id)
    //     );
    // };

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton onClick={addToCart}>
                <Add />
            </IconButton>
            {/*<IconButton onClick={removeFromCart}>*/}
            {/*    <Remove />*/}
            {/*</IconButton>*/}
        </Box>
    )

}

export default function Menu() {
    const { cartItems } = useCart()

    const gridStyles = { display: "flex", alignSelf: "center", justifyContent: "flex-end" }

    return (
        <>
            {MENU.map((dish: Dish, index) => (
                <Box key={index}>
                    <Grid container sx={{ padding: 3 }}>
                        <Grid item xs={10}>
                            <Typography variant="h2">{dish.course}</Typography>
                            <Typography variant="h5">{dish.side}</Typography>
                        </Grid>
                        <Grid item sx={{ ...gridStyles }} xs={1}>
                            <Typography variant="h2">{dish.price.toFixed(2)}</Typography>
                        </Grid>
                        <Grid item sx={{ ...gridStyles }} xs={1}>
                            <AddAndRemove dish={dish} />
                            <Chip label={cartItems.find(item => item.dish.id === dish.id)?.quantity || 0}
                                  sx={{ alignSelf: "center" }} />
                        </Grid>
                    </Grid>
                    <Divider />
                </Box>
            ))}
        </>
    );
}