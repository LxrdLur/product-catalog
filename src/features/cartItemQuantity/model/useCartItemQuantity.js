import {useContext} from "react";
import {CartContext} from "@/shared/context/cart/CartContext.jsx";

export default function useCartItemQuantity () {
    const {cart, setCart} = useContext(CartContext)

    const increaseQuantity = (cartItem) => {
        setCart(prev => prev.map(item => item.id === cartItem.id ? {...item, quantity: item.quantity + 1} : item))
        console.log(cartItem.quantity)
    }
    const decreaseQuantity = (cartItem) => {
        setCart(prev => prev.map(item => item.id === cartItem.id ? {...item, quantity: item.quantity - 1} : item))
    }

    return {
        increaseQuantity,
        decreaseQuantity,
    }
}