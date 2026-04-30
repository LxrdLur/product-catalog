import React, {useEffect, useState} from 'react';
import {CartContext} from "@/shared/context/cart/CartContext.jsx";

export default function CartProvider({children}){
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    })

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
};
