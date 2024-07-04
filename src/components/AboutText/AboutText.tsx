import React from "react";
import { FC } from "react";
import { AboutTextProps } from "@/interfaces/AboutTextProps";

import styles from "./AboutText.module.css";

const AboutText: FC<AboutTextProps> = ({ text }) => {
    return <p className={styles.text}>{text}</p>;
};

export default AboutText;
