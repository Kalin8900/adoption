import React from "react";
import styles from "./error.module.css"

export const Error = () => {


    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorH1}>Error 404. Something went wrong! Try again later</h1>
        </div>
    )
}