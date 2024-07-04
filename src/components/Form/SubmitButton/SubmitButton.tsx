import React from "react";
import { FC } from "react";

import styles from "./SubmitButton.module.css";

type SubmitButtonProps = {
    disabled: boolean;
    children: React.ReactNode;
};

const SubmitButton: FC<SubmitButtonProps> = ({ disabled, children }) => {
    return (
        <button className={styles.button} type="submit" disabled={disabled}>
            {children}
        </button>
    );
};

export default SubmitButton;
