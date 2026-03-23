import React from 'react';
import ProductCard from "@/entities/product/UI/ProductCard.jsx";
import AddToCartButton from "@/features/add-to-cart/UI/AddToCartButton.jsx";

const ProductsList = ({products}) => {
    const hasProducts = products.length > 0
    if(!hasProducts){
        return (
            <div className='cardsList__no-cards'>
                <p className='no-products'>Товары не найдены</p>
            </div>
        )
    }
    return (
        <ul className='cardsList'>
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product}>
                        <AddToCartButton product={product}></AddToCartButton>
                    </ProductCard>
                </li>
            ))}
        </ul>
    );
};

export default ProductsList;
