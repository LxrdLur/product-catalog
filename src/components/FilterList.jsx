import React from 'react';
import ButtonFilter from "@/components/button/ButtonFilter.jsx";

const FilterList = () => {
    const clickSort = (sort) => {
        console.log(sort)
    }
    return (
        <div className='filterList'>
            {FILTERS.map((filter) => (
                <ButtonFilter
                    filterName={filter.label}
                    key={filter.value}
                    onClick={() => clickSort(filter.label)}
                />
            ))}
        </div>
    );
};

export default FilterList;