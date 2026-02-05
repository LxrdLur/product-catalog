import React from 'react';
import {FILTERS} from "@/assets/filters.js";
import {PRODUCTS} from "@/assets/cardsInfo.js";
import Catalog from "@/components/Catalog.jsx";

const CatalogPage = () => {
    return (
        <div>
            <Catalog filters={FILTERS} products={PRODUCTS}/>
        </div>
    );
};

export default CatalogPage;