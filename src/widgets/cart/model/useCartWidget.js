import {useContext, useState} from "react";
import {CartContext} from "@/shared/context/cart/CartContext.jsx";

export default function useCartWidget ({product}) {
    const [isOpen, setIsOpen] = useState(false);
    const {cart} = useContext(CartContext)

    const showCart = () => {
        setIsOpen(prev => !prev);
    };

    return {
        isOpen,
        showCart
    }

}