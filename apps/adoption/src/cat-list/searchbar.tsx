import React from "react";
import { InputBase } from "@mui/material";
import Button from "@mui/material/Button/Button";
import Paper from "@mui/material/Paper/Paper";
import styles from "../cat-list/filters.module.css"

export const SearchBar = ({input, onChange}: {input: string; onChange: any}) => {

    return (
        <Paper
        component="form"
        className={styles.paper}
        >
            <InputBase
            placeholder="Search name"
            className={styles.input}
            onChange={(e) => onChange(e.target.value)}
            value={input}
            />
                <Button 
                disabled={input ? false : true}
                onClick={() =>  onChange(input="")}
                >Clear</Button>
        </Paper>
    )
}