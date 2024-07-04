import React, { FC, useEffect, useState } from 'react';
import { TextAreaProps } from '../../../interfaces/TextAreaProps';
import styles from './TextArea.module.css';

const TextArea: FC<TextAreaProps> = ({ label, name, value, onChange, error }) => {
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        if (value !== '') {
            setIsTouched(true);
        }
    }, [value]);

    let textareaClassName = styles.textareaInitial;
    if (isTouched) {
        textareaClassName = error ? styles.textareaError : styles.textareaSuccess;
    }

    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <textarea
                id={name}
                className={`${styles.textarea} ${textareaClassName}`}
                name={name}
                value={value}
                onChange={onChange}
                required
                placeholder=" "
            ></textarea>
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

export default TextArea;
