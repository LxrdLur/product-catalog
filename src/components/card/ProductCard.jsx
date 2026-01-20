import React from 'react';
import style from './ProductCard.module.css';
import { images } from "@/assets/images";
import {products} from "@/assets/cardsInfo.js";

const ProductCard = ({product}) => {
    return (
        <div className={style.productCard}>
            <img src={images[product.img]} alt={product.title} />
            <div className={style.productCard__text}>
                <div className={style.productCard__textWrapp}>
                    <h3>{product.type} {product.title}</h3>
                </div>
                <div className={style.productCard__textBottom}>
                    <div className={style.productCard__tags}>
                        {product.tags.map((tag,index) => <button key={index}>{tag} </button>)}
                    </div>
                    <div className={style.productCard__price}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Trash bin">
                            <path d="M4 7h16"></path>
                            <path d="M10 11v7"></path>
                            <path d="M14 11v7"></path>
                            <path d="M6 7l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"></path>
                            <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        <p>{product.price}₽</p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductCard;