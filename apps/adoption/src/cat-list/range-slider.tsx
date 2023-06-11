import React, { useState } from "react";
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
import styles from "../cat-list/filters.module.css"

export const RangeSlider = () => {
    const [value, setValue] = useState<number []>([25, 60]);

    const handleChange = (event: Event, newValue: number | number []) => {
        setValue(newValue as number[])
    }
    return (
        <Box className={styles.sliderBox}>
            <div>Adoption fee:</div>
            <Slider
            sx={{color: '#5f3f16', marginTop: '40px'}}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            getAriaLabel={() => "slider"}
            min={25}
            max={220}
            disableSwap
            />
        </Box>
    )
}