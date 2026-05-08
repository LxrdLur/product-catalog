import React from 'react';
import style from './CustomInput.module.css';
import clsx from "clsx";

const CustomInput = ({value, onChange, className}) => {
    return (
        <div className={style.customInputWrapp}>
            <div className={style.customInputBefore}>Поиск</div>
            <input
                className={clsx(style.customInput, className)}
                placeholder='Введите название'
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />

        </div>
    );
};

export default CustomInput;