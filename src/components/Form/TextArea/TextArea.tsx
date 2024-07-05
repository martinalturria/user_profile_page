import React, { FC, useEffect, useState } from "react";

import { TextAreaProps } from "../../../interfaces/textAreaProps";

import styles from "./TextArea.module.css";

const TextArea: FC<TextAreaProps> = ({
    label,
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

    let textareaClassName = styles.textareaInitial;
    let labelClassName = styles.label;
    if (isTouched) {
        textareaClassName = error
            ? styles.textareaError
            : styles.textareaSuccess;
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
            <textarea
                id={name}
                className={`${styles.textarea} ${textareaClassName}`}
                name={name}
                value={value}
                onChange={onChange}
                required
                placeholder=" "
            ></textarea>
            {error && (
                <div className={styles.errorContainer}>
                    <span className={styles.errorMessage}>{error}</span>
                </div>
            )}
        </div>
    );
};

export default TextArea;
