import React from "react";
import { name, urlPicture } from "@/data/data";
import Profile from "../../components/Profile/Profile";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Profile src={urlPicture} alt="Perfil" name={name} />
        </header>
    );
};

export default Header;
