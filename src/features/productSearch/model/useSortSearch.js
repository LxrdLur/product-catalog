import {useMemo} from "react";

export default function useSortSearch(productsAfterSort, searchQuery) {

    const filteredProducts = useMemo(()=>{
        if(searchQuery.length > 0){
            console.log('изменился')
            return productsAfterSort.filter(product => product.title.trim().toLowerCase().includes(searchQuery.toLowerCase()))
        }else{
            return productsAfterSort
        }
    }, [productsAfterSort, searchQuery])

    return {
        filteredProducts
    }
}