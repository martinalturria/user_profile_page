import React, { FC, useEffect, useState } from "react";

import { InputFieldProps } from "../../../interfaces/inputFieldProps";

import styles from "./InputField.module.css";

const InputField: FC<InputFieldProps> = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    reset,
}) => {
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        if (value !== "") {
            setIsTouched(true);
        } else if (reset) {
            setIsTouched(false);
        }
    }, [value, reset]);

    let inputClassName = styles.inputInitial;
    let labelClassName = styles.label;
    if (isTouched) {
        inputClassName = error ? styles.inputError : styles.inputSuccess;
        labelClassName = error ? styles.labelError : styles.labelSuccess;
    }

    return (
        <div className={styles.field}>
            <label
                htmlFor={name}
                className={`${styles.label} ${labelClassName}`}
            >
                {label}
            </label>
            <input
                id={name}
                className={`${styles.input} ${inputClassName}`}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
            {error && (
                <div className={styles.errorContainer}>
                    <span className={styles.errorMessage}>{error}</span>
                </div>
            )}
        </div>
    );
};

export default InputField;
