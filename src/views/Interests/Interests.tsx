import React from "react";
import { interests } from "../../data/data";
import InterestItem from "../../components/InterestItem/InterestItem";

import styles from "./Interests.module.css";

const Interests = () => {
    const middleIndex = Math.ceil(interests.length / 2);
    const leftColumn = interests.slice(0, middleIndex);
    const rightColumn = interests.slice(middleIndex);

    return (
        <section className={styles.interests}>
            <h2 className={styles.heading}>Intereses</h2>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    {leftColumn.map((interest, index) => (
                        <InterestItem key={index} interest={interest} />
                    ))}
                </ul>
                <ul className={styles.list}>
                    {rightColumn.map((interest, index) => (
                        <InterestItem key={index} interest={interest} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Interests;
