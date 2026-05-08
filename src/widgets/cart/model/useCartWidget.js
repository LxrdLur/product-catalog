import {useContext, useMemo, useState} from "react";
import {CartContext} from "@/shared/context/cart/CartContext.jsx";

export default function useCartWidget ({product}) {
    const [isOpen, setIsOpen] = useState(true);
    const {cart} = useContext(CartContext)

    const showCart = (event) => {
        setIsOpen(prev => !prev);
    };
    const cartTotalPrice = useMemo(()=> {
        return cart.reduce((acc, cur) => {
            return acc + cur.price * cur.quantity;
        }, 0)
    }, [cart])

    return {
        isOpen,
        showCart,
        cartTotalPrice,
    }

}