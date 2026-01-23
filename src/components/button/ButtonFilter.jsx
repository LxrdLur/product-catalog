import React from 'react';
import style from './ButtonFilter.module.css';

const ButtonFilter = ({children, ...buttonProps}) => {
    return (
        <button {...buttonProps} className={style.buttonFilter}>
            {children}
        </button>
    );
};

export default ButtonFilter;