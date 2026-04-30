import {useContext} from "react";
import {CartContext} from "@/shared/context/cart/CartContext.jsx";

export default function useCart(){
    const {cart, setCart} = useContext(CartContext)

    const addToCart = (product) => {
        setCart(prev => {
            const productExist = cart.some(item => item.id === product.id)

            if(productExist){
                return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }

            return [
                ...prev,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                    typeForIcon: product.typeForIcon,
                }
            ]
        });

    }

    return {
        addToCart
    }
}