import React from 'react';
import style from './CustomInput.module.css';

const CustomInput = ({value, onChange}) => {
    return (
        <div className={style.customInputWrapp}>
            <div className={style.customInputBefore}>Поиск</div>
            <input
                className={style.customInput}
                placeholder='Введите название'
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />

        </div>
    );
};

export default CustomInput;