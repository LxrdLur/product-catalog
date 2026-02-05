import React, {useState} from 'react';
import FilterList from "@/components/FilterList.jsx";
import CardsList from "@/components/CardsList.jsx";

const Catalog = ({filters, products}) => {
    const [selectedFilter, setSelectedFilter] = useState(filters[0].value)
    const sortProducts = () => {
        const arr = [...products];
        switch (selectedFilter) {
            case 'asc':
                return arr.sort((a,b) => a.price - b.price)
            case 'desc':
                return arr.sort((a,b) => b.price - a.price)
            default:
                return products;
        }
    }
    const productsAfterSort = sortProducts()
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