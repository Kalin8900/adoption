import { useLocation, useParams } from 'react-router-dom';
import styles from '../cat/cat.module.css';
import React from "react"


export const Cat = () => {

    const params = useParams()
    const location = useLocation()
    
    const [cat, setCat] = React.useState(null)
    

    return (
        <div className={styles.CatDetail}>
            <h1>CAT</h1>
        </div>
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
