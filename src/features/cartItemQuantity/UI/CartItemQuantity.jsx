import React from 'react';
import styles from './CartItemQuantity.module.css'
import useCartItemQuantity from "@/features/cartItemQuantity/model/useCartItemQuantity.js";
import {CartContext} from "@/shared/context/cart/CartContext.jsx";
import {useContext} from "react";

const CartItemQuantity = ({cartItem}) => {
    const {increaseQuantity, decreaseQuantity} = useCartItemQuantity()
    const {cart} = useContext(CartContext)

    return (
        <div className={styles.cartItemQuantity}>
            <button
                onClick={()=> decreaseQuantity(cartItem)}
            >
                -
            </button>
            <p>{cartItem.quantity}</p>
            <button
                className={styles.cartItemQuantityPlus}
                onClick={() => increaseQuantity(cartItem)}
            >
                +
            </button>
        </div>
    );
};

export default CartItemQuantity;