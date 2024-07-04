import { FC } from "react";
import { InputFieldProps } from "@/interfaces/InputFieldProps";

import styles from "./InputField.module.css";

const InputField: FC<InputFieldProps> = ({
    label,
    type,
    name,
    value,
    onChange,
}) => {
    return (
        <div className={styles.field}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default InputField;
