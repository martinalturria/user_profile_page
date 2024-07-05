import React from "react";

import { aboutText } from "../../data/data";
import AboutText from "../../components/AboutText/AboutText";

import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.about}>
            <h2 className={styles.heading}>Sobre mí</h2>
            <AboutText text={aboutText} />
        </section>
    );
};

export default About;
