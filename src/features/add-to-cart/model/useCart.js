import {useContext} from "react";
import {CartContext} from "@/shared/context/cart/CartContext.jsx";

export default function useCart(){
    const {setCart} = useContext(CartContext)

    const addToCart = (product) => {
        setCart(prev => [...prev, {
            id: Math.random(),
            title: product.title,
            quantity: 1,
        }])
    }

    return {
        addToCart
    }
}