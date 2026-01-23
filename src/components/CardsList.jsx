import React from 'react';
import ProductCard from "@/components/card/ProductCard.jsx";

const CardsList = ({products}) => {
    const hasProducts = products.length > 0
    if(!hasProducts){
        return <p>Каталог товаров пуст</p>
    }
    return (
        <ul className='cardsList'>
            {products.map((product) => (
                <li>
                    <ProductCard key={product.id} product={product}/>
                </li>
            ))}
        </ul>
    );
};

export default CardsList;
