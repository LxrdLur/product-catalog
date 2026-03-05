import React from 'react';
import {SORT_OPTIONS} from "@/features/productSort/modal/sortConfig.js";
import {PRODUCTS} from "@/entities/product/model/productsConfig.js";
import Catalog from "@/widgets/catalog/UI/Catalog.jsx";

const CatalogPage = () => {
    return (
        <div>
            <Catalog filters={SORT_OPTIONS} products={PRODUCTS}/>
        </div>
    );
};

export default CatalogPage;