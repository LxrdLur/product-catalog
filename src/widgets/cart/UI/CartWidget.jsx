import React from 'react';
import styles from './CartWidget.module.css'

const CartWidget = () => {

    const hasCartProduct = JSON.parse(localStorage.getItem('cart')) || []

    if(hasCartProduct.length > 0){
        return (
            <div className={styles.cartWidget}>
                .....
            </div>
        );
    }else{
        console.log('Корзина пуста')
    }

};

export default CartWidget;