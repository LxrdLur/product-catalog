import SortControls from "@/features/productSort/UI/SortControls.jsx";
import ProductsList from "@/widgets/ProductsList/UI/ProductsList.jsx";
import useCatalogProducts from "@/widgets/catalog/model/useCatalogProducts.js";
import useSortSearch from "@/features/productSearch/model/useSortSearch.js";
import {useState} from "react";
import SearchBar from "@/features/productSearch/UI/SearchBar.jsx";
import styles from './Catalog.module.css'

const Catalog = ({filters, products}) => {
    const [searchQuery, setSearchQuery] = useState('')
    const {
        selectedFilter,
        setSelectedFilter,
        productsAfterSort,
    } = useCatalogProducts(filters, products)
    const {
        filteredProducts,
    } = useSortSearch(productsAfterSort, searchQuery)

    return (
        <div>
            <SearchBar
                className={styles.catalogSearchBar}
                inputClassName={styles.catalogSearchInput}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <SortControls
                className={styles.catalogSortControls}
                filters={filters}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />
            <ProductsList products={filteredProducts} />
        </div>
    );
};

export default Catalog;