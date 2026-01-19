import React from 'react';
import style from './ButtonFilter.module.css';

const ButtonFilter = ({children}) => {
    return (
        <button className={style.buttonFilter}>
            {children}
        </button>
    );
};

export default ButtonFilter;