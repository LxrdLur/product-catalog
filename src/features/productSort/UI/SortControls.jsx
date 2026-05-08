import React from 'react';
import ButtonFilter from "@/shared/UI/button/ButtonFilter.jsx";
import styles from './SortControls.module.css'
import clsx from "clsx";

const SortControls = ({filters, setSelectedFilter, className}) => {
    const clickSort = (selectedFilter) => {
        setSelectedFilter(selectedFilter)
    }
    return (
        <div className={clsx(styles.filterList, className)}>
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

export default SortControls;