import { FC } from "react";

import styles from "./AboutText.module.css";

type AboutTextProps = {
    text: string;
};

const AboutText: FC<AboutTextProps> = ({ text }) => {
    return <p className={styles.text}>{text}</p>;
};

export default AboutText;
