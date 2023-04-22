import { useParams } from 'react-router-dom';
import styles from '../cat/cat.module.css';
import { getCatById } from "../api/getCatById";
import React, { useEffect } from "react"
import { CatListItem } from '../cat-list-item/cat-list-item';

export const Cat = () => {
    const {id} = useParams()
    const [isCat, setIsCat] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)

    const handleCat = () => {
        setIsCat(CatListItem.id)
    }

    const handleLoading = () => {
        setIsLoading(!isLoading)
    }
    
//     useEffect(() => {
//     getCatById(CatListItem.id)
//   },[isCat])

return (
    <>
        {isLoading ? <div>Cat is Loading</div> : ({handleLoading} && {handleCat})}
        {isCat !== null ? <div className={styles.CatDetail}>CAT {id}</div> : <div>Error 404</div>}
    </>
)
}




 /* // 1. Napisz Podstawowego Page'a dla kota (Pusty z tytułem) - done
// 2. Link z Cat List Item => CatPage - done
// 3. Route w App => CatPage (wykorzystaj parameter /cat/:id) + w routes.ts - w połowie done

// stan do trzymania kota, który początkowo jest null
// stan do sprawdzaniam, czy dane są ładowane
// useEffect, który pobiera dane z api i ustawia kota
// jeśli kota się łąduje, to wyświetl ładującego się kota
// jeśli kota nie ma, to wyświetl 404
// jeśli kot jest, to wyświetl dane kota */ 
