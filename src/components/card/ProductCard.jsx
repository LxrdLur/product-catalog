import React from 'react';
import style from './ProductCard.module.css';
import { images } from "@/assets/images";

const ProductCard = ({product}) => {
    return (
        <div className={style.productCard}>
            <img src={images[product.img]} alt={product.title} />
            <div className={style.productCard__text}>
                <p>Тип: {product.type}</p>
                <h3>Название: {product.title}</h3>
                <p>Описание: {product.desc}</p>
            </div>
            <div className={style.productCard__price}>
                <p>Цена: {product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;