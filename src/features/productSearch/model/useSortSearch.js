import {useMemo} from "react";

export default function useSortSearch(productsAfterSort, searchQuery) {

    const filteredProducts = useMemo(()=>{
        if(searchQuery.length > 2){
            return productsAfterSort.filter(product => product.title.toLowerCase().includes(searchQuery.trim().toLowerCase()))
        }else{
            return productsAfterSort
        }
    }, [productsAfterSort, searchQuery])

    return {
        filteredProducts
    }
}