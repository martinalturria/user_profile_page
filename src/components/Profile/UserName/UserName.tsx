import React from "react";
import { UserNameProps } from "@/interfaces/UserNameProps";

import styles from "./UserName.module.css";

const UserName = ({ name }: UserNameProps) => {
    return <span className={styles.name}>{name}</span>;
};

export default UserName;
