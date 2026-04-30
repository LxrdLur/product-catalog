import React, {useState, useContext} from 'react';
import styles from './CartWidget.module.css'
import clsx from 'clsx';
import {CartContext} from "@/shared/context/cart/CartContext.jsx";
import useCartWidget from "@/widgets/cart/model/useCartWidget.js";
import CartItemQuantity from "@/features/cartItemQuantity/UI/CartItemQuantity.jsx";
import {iconMap} from "@/shared/UI/icons/iconMap.js";

const CartWidget = ({product}) => {
    const {cart} = useContext(CartContext)
    const {isOpen, showCart, cartTotalPrice} = useCartWidget({product})

    return (
        <div className={clsx(styles.cartButton, isOpen ? styles.cartShow : null)}>
            <svg
                onClick={showCart}

                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/>
            </svg>
            <div className={clsx( styles.cartBlock, !isOpen && styles.cartHide)}>
                <div className={styles.cartTitle}>
                    <h3> Корзина </h3>
                </div>
                <div className={styles.cartItemsList}>
                    {
                        cart.length > 0 ? cart.map((cartItem) => {
                            const Icon = iconMap[cartItem.typeForIcon]
                            console.log(cartItem.typeForIcon, iconMap[cartItem.typeForIcon])
                            return(
                                <div key={cartItem.id} className={styles.cartItem}>
                                    <Icon className={styles.cartIcon}/>
                                    <div className={styles.cartItemText}>
                                        <p>{cartItem.title}</p>
                                        <p>Цена: {cartItem.price} ₽</p>
                                    </div>
                                    <CartItemQuantity cartItem={cartItem}/>
                                </div>
                            )
                        }) : <div className={styles.cartIsClear}><p>Товары в корзине отсутствуют</p></div>
                    }
                </div>
                <div className={styles.cartTotalPrice}>
                    <p>Итого: {cartTotalPrice} ₽</p>
                    {cart.length >0 &&(
                        <div className={styles.cartForwardTo}>
                            <p>К оформлению</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm41-159c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39-150.1 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l150.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80z"/>
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

};

export default CartWidget;