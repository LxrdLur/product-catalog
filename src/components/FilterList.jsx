import React from 'react';
import ButtonFilter from "@/components/button/ButtonFilter.jsx";

const FilterList = () => {
    return (
        <div className='filterList'>
            <ButtonFilter>По возрастанию</ButtonFilter>
            <ButtonFilter>По убыванию</ButtonFilter>
            <ButtonFilter>По популярности</ButtonFilter>
        </div>
    );
};

export default FilterList;