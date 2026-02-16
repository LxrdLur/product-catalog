import React from 'react';
import ProductCard from "@/entities/product/UI/ProductCard.jsx";
import ButtonFilter from "@/shared/UI/button/ButtonFilter.jsx";

const ProductsList = ({products}) => {
    const hasProducts = products.length > 0
    if(!hasProducts){
        return <p>Каталог товаров пуст</p>
    }
    return (

        <ul className='cardsList'>
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard key={product.id} product={product}/>
                </li>
            ))}
        </ul>
    );
};

export default ProductsList;
