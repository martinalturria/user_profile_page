import React, { FC } from "react";

import { AboutTextProps } from "@/interfaces/aboutTextProps";

import styles from "./AboutText.module.css";

const AboutText: FC<AboutTextProps> = ({ text }) => {
    return <p className={styles.text}>{text}</p>;
};

export default AboutText;
