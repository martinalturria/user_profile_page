import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { name, urlPicture } from "@/data/data";
import Profile from "../../components/Profile/Profile";
import styles from "./Header.module.css";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode) {
            setDarkMode(JSON.parse(savedMode));
            document.documentElement.classList.toggle(
                "dark",
                JSON.parse(savedMode)
            );
            document.body.classList.toggle(
                "dark",
                JSON.parse(savedMode)
            );
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("darkMode", JSON.stringify(newMode));
            document.documentElement.classList.toggle("dark", newMode);
            document.body.classList.toggle("dark", newMode);
            return newMode;
        });
    };

    return (
        <header className={styles.header}>
            <Profile src={urlPicture} alt="Perfil" name={name} />
            <div onClick={toggleDarkMode} className={styles.darkModeIcon}>
                {darkMode ? <FaSun /> : <FaMoon />}
            </div>
        </header>
    );
};

export default Header;
