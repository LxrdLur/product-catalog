import React from 'react';
import style from './ButtonFilter.module.css';

const ButtonFilter = (
    {
        filterName,
        onClick,
        ...buttonProps
    }
) => {
    return (
        <button
            {...buttonProps}
            onClick={onClick}
            className={style.buttonFilter}
        >
            {filterName}
        </button>
    );
};

export default ButtonFilter;