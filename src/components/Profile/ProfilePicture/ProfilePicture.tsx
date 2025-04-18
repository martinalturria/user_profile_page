import React from "react";
import Image from "next/image";

import { ProfilePictureProps } from "@/interfaces/profilePictureProps";

import styles from "./ProfilePicture.module.css";

const ProfilePicture = ({ src, alt }: ProfilePictureProps) => {
    return (
        <Image
            className={styles.image}
            src={src}
            alt={alt}
            width={50}
            height={50}
        />
    );
};

export default ProfilePicture;
