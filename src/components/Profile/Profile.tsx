import React from "react";

import ProfilePicture from "./ProfilePicture/ProfilePicture";
import UserName from "./UserName/UserName";

import { ProfileProps } from "@/interfaces/profileProps";

import styles from "./Profile.module.css";

const Profile = ({ src, alt, name }: ProfileProps) => {
    return (
        <div className={styles.profile}>
            <ProfilePicture src={src} alt={alt} />
            <UserName name={name} />
        </div>
    );
};

export default Profile;
