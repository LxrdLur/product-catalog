import React, {useState} from 'react';
import {CartContext} from "@/shared/context/cart/CartContext.jsx";

export default function CartProvider({children}){
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
};
