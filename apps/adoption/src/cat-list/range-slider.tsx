import React, { useState } from "react";
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
import styles from "../cat-list/filters.module.css"

// export const RangeSlider = ({priceMin, priceMax, onChange}: {priceMin: number; priceMax: number; onChange: any}) => {
//     const [value, setValue] = useState<number []>([priceMin, priceMax]);

//     const handleChange = (event: Event, newValue: number | number []) => {
//         setValue(newValue as number[])
//     }

export const RangeSlider = ({value, handleChange, min, max}: {value: number [], handleChange: any, min: number, max: number}) => {


    return (
        <Box className={styles.sliderBox}>
            <div>Adoption fee:</div>
            <Slider
            sx={{color: '#5f3f16', marginTop: '40px'}}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            getAriaLabel={() => "slider"}
            min={min}
            max={max}
            disableSwap
            />
        </Box>
    )
}