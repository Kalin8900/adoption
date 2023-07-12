import React from "react";
import styles from "./user.module.css"



export const AccountMain = () => {

    return (
        <div className={styles.userContainer}>
            <h1 className={styles.name}>{`Hi, Name`}</h1>
        </div>
    )
}