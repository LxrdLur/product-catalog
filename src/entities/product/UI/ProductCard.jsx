import React from 'react';
import style from './ProductCard.module.css';
import { images } from "@/shared/assets/img/images.js";

const ProductCard = ({product = {}, children}) => {
    const { img, title, type, desc, tags = [], price } = product;
    const srcImage = images[img];

    return (
        <div className={style.productCard}>
            <img src={srcImage} alt={title} />
            <div className={style.productCard__text}>
                <div className={style.productCard__textWrapp}>
                    <h3>{type} {title} {desc}</h3>
                </div>
                <div className={style.productCard__textBottom}>
                    <div className={style.productCard__tags}>
                        {tags.map((tag) => <button key={tag}>{tag} </button>)}
                    </div>
                    <div className={style.productCard__price}>
                        {children}
                        <p>{price}₽</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;