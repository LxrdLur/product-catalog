import FilterList from "@/widgets/FilterList/UI/FilterList.jsx";
import ProductsList from "@/widgets/ProductsList/UI/ProductsList.jsx";
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
            <ProductsList products={productsAfterSort} />
        </div>
    );
};

export default Catalog;