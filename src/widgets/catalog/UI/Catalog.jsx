import React, {useState} from 'react';
import FilterList from "@/components/FilterList.jsx";
import CardsList from "@/components/CardsList.jsx";
import useCatalogProducts from "@/widgets/catalog/model/useCatalogProducts.js";

const Catalog = ({filters, products}) => {
    const {
        selectedFilter,
        setSelectedFilter,
        productsAfterSort,
    } = useCatalogProducts(filters, products)

    return (
        <div>
            <FilterList
                filters={filters}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />
            <CardsList products={productsAfterSort} />
        </div>
    );
};

export default Catalog;