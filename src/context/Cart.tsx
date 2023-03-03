import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { Dish } from "../interfaces/Menu";

type CartItems = Array<{ dish: Dish; quantity: number }>

type CartContextType = {
    cartItems: CartItems;
    setCartItems: React.Dispatch<React.SetStateAction<CartItems>>;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
    children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItems>(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    const contextValue = useMemo(() => ({
        cartItems,
        setCartItems,
    }), [cartItems, setCartItems]);

    useEffect(() => {
        if (cartItems) localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
