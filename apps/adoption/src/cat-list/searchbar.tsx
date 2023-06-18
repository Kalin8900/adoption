import React, { useState } from "react";
import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import SearchIcon from "@mui/icons-material/Search"
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
                <Button disabled>Clear</Button>
                <IconButton type="submit">
                    <SearchIcon />
                </IconButton>
        </Paper>
    )
}