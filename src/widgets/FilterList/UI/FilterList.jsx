import React from 'react';
import ButtonFilter from "@/shared/UI/button/ButtonFilter.jsx";

const FilterList = ({filters, setSelectedFilter}) => {
    const clickSort = (selectedFilter) => {
        setSelectedFilter(selectedFilter)
    }
    return (
        <div className='filterList'>
            {filters.map((filter) => (
                <ButtonFilter
                    filterName={filter.label}
                    key={filter.value}
                    onClick={() => clickSort(filter.value)}
                />
            ))}
        </div>
    );
};

export default FilterList;