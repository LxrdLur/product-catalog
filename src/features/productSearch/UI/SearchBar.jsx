import React from 'react';
import CustomInput from "@/shared/UI/input/CustomInput.jsx";
import clsx from "clsx";
import styles from './SearchBar.module.css';

const SearchBar = (
    {
        searchQuery,
        setSearchQuery,
        className,
        inputClassName,
    }) => {

    return (
        <div className={clsx(styles.sortSearch, className)}>
            <CustomInput value={searchQuery} onChange={setSearchQuery} className={inputClassName}/>
        </div>
    );
};

export default SearchBar;