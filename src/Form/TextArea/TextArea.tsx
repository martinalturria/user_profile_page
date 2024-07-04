import { FC } from "react";
import { TextAreaProps } from "@/interfaces/TextAreaProps";

import styles from "./TextArea.module.css";

const TextArea: FC<TextAreaProps> = ({ label, name, value, onChange }) => {
    return (
        <div className={styles.field}>
            <label className={styles.label}>{label}</label>
            <textarea
                className={styles.textarea}
                name={name}
                value={value}
                onChange={onChange}
                required
            ></textarea>
        </div>
    );
};

export default TextArea;