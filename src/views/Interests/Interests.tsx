import React from "react";
import InterestItem from "../../components/InterestItem/InterestItem";

import styles from "./Interests.module.css";

const Interests = () => {
    const interests = ["Interés 1", "Interés 2", "Interés 3"];

    return (
        <section className={styles.interests}>
            <h2 className={styles.heading}>Intereses</h2>
            <ul className={styles.list}>
                {interests.map((interest, index) => (
                    <InterestItem key={index} interest={interest} />
                ))}
            </ul>
        </section>
    );
};

export default Interests;
