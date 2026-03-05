import React, {useState} from 'react';
import CustomInput from "@/shared/UI/input/CustomInput.jsx";

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
        <div className='sortSearch'>
            <CustomInput value={searchQuery} onChange={setSearchQuery} />
        </div>
    );
};

export default SearchBar;