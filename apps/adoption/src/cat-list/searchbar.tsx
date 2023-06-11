import React from "react";
import { InputBase } from "@mui/material";
import Divider from "@mui/material/Divider/Divider";
import IconButton from "@mui/material/IconButton/IconButton";
import SearchIcon from "@mui/icons-material/Search"
import Button from "@mui/material/Button/Button";
import Paper from "@mui/material/Paper/Paper";
import styles from "../cat-list/filters.module.css"

export default function CustomizedInputBase() {
    return (
        <Paper
        component="form"
        className={styles.paper}
        >
            <InputBase
            placeholder="Search name"
            className={styles.input}
            />
                <Button disabled>Clear</Button>
                <IconButton type="submit">
                    <SearchIcon />
                </IconButton>
        </Paper>
    )
}