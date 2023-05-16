import React from "react";
import styles from "./loading.module.css"

export const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <h1 className={styles.loadingH1}>Wait, cats are coming...</h1>
        </div>
    )
}