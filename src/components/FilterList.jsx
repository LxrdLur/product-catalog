import React from 'react';
import ButtonFilter from "@/components/button/ButtonFilter.jsx";

const FilterList = ({filters}) => {
    const clickSort = (sort) => {
        console.log(sort)
    }
    return (
        <div className='filterList'>
            {filters.map((filter) => (
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