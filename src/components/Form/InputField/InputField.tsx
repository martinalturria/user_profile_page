import React, { FC, useEffect, useState } from 'react';
import { InputFieldProps } from '../../../interfaces/InputFieldProps';
import styles from './InputField.module.css';

const InputField: FC<InputFieldProps> = ({ label, type, name, value, onChange, error }) => {
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        if (value !== '') {
            setIsTouched(true);
        }
    }, [value]);

    let inputClassName = styles.inputInitial;
    if (isTouched) {
        inputClassName = error ? styles.inputError : styles.inputSuccess;
    }

    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input
                id={name}
                className={`${styles.input} ${inputClassName}`}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

export default InputField;
