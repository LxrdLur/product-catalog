import React from 'react';
import FilterList from "@/components/FilterList.jsx";
import CardsList from "@/components/CardsList.jsx";

const Catalog = ({filters, products}) => {
    return (
        <div>
            <FilterList filters={filters} />
            <CardsList products={products} />
        </div>
    );
};

export default Catalog;