import React, { FC } from "react";

import { InterestItemProps } from "@/interfaces/interestItemProps";

import styles from "./InterestItem.module.css";

const InterestItem: FC<InterestItemProps> = ({ interest }) => {
    return <li className={styles.item}>{interest}</li>;
};

export default InterestItem;
