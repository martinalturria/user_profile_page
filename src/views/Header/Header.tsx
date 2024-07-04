import React from "react";
import Profile from '../../components/Profile/Profile';

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Profile src="/profile-pic.png" alt="Perfil" name="Martin Alturria" />
        </header>
    );
};

export default Header;
