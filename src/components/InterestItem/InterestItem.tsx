import { FC } from "react";

import styles from "./InterestItem.module.css";

type InterestItemProps = {
    interest: string;
};

const InterestItem: FC<InterestItemProps> = ({ interest }) => {
    return <li className={styles.item}>{interest}</li>;
};

export default InterestItem;
