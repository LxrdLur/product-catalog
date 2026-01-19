import React from 'react';
import ProductCard from "@/components/card/ProductCard.jsx";

const CardsList = ({products}) => {
    return (
        <div className='cardsList'>
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
        </div>
    );
};

export default CardsList;