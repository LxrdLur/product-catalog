import {useMemo, useState} from "react";

export default function useCatalogProducts(filters, products){
    const [selectedFilter, setSelectedFilter] = useState(filters[0].value)

    const productsAfterSort = useMemo(() => {
        const arr = [...products];

        switch (selectedFilter) {
            case 'asc':
                return arr.sort((a, b) => a.price - b.price);

            case 'desc':
                return arr.sort((a, b) => b.price - a.price);

            default:
                return arr;
        }

    }, [selectedFilter, products]);

    return {
        selectedFilter,
        setSelectedFilter,
        productsAfterSort,
    }
}