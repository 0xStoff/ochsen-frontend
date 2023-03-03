// import { Add, Remove } from "@mui/icons-material";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import { Dish } from "../../interfaces/Menu";
import { MENU } from "../../config/text";
// import { useCart } from "../../context/Cart";


// function AddAndRemove({ dish }: { dish: Dish }) {
//     const { cartItems, setCartItems } = useCart()
//
//     const addToCart = () => {
//         const index = cartItems.findIndex(item => item.dish.id === dish.id);
//         if (index === -1) {
//             setCartItems(prevCartItems => [...prevCartItems, { dish, quantity: 1 }]);
//         } else {
//             const updatedCartItems = [...cartItems];
//             updatedCartItems[index].quantity++;
//             setCartItems(updatedCartItems);
//         }
//     };
//
//     const removeFromCart = () => {
//         const index = cartItems.findIndex(item => item.dish.id === dish.id);
//         if (cartItems[index].quantity <= 0) {
//             return
//         } else {
//             const updatedCartItems = [...cartItems];
//             updatedCartItems[index].quantity--;
//             setCartItems(updatedCartItems);
//         }
//     };
//
//     return (
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <IconButton onClick={addToCart}>
//                 <Add />
//             </IconButton>
//             <IconButton onClick={removeFromCart}>
//                 <Remove />
//             </IconButton>
//         </Box>
//     )

// }

export default function Menu() {
    // const { cartItems } = useCart()

    const gridStyles = { display: "flex", alignSelf: "center", justifyContent: "flex-end" }

    // const findItemQuantity = (dish: Dish) => cartItems.find(item => item.dish.id === dish.id)?.quantity || 0
    return (
        <>
            {MENU.map((dish: Dish, index) => (
                <Box key={index}>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <Typography variant="h4">{dish.course}</Typography>
                            <Typography variant="h6">{dish.side}</Typography>
                        </Grid>
                        <Grid item sx={{ ...gridStyles }} xs={2}>
                            <Chip label={dish.price.toFixed(2)} variant="outlined"></Chip>
                        </Grid>
                        {/*TODO: add and remove to/from cart*/}
                        {/*<Grid item sx={{ ...gridStyles }} xs={1}>*/}
                        {/*    <AddAndRemove dish={dish} />*/}
                        {/*    <Chip label={findItemQuantity(dish)}*/}
                        {/*          sx={{ alignSelf: "center" }}*/}
                        {/*          variant={findItemQuantity(dish) ? 'filled' : 'outlined'} />*/}
                        {/*</Grid>*/}
                    </Grid>
                    <Divider />
                </Box>
            ))}
        </>
    );
}