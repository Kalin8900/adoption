import React, { useState } from 'react';
import { CatListItem } from '../cat-list-item/cat-list-item';
import cats from '../api/data.json';
import { Link, useSearchParams } from 'react-router-dom';
import styles from "../cat-list-item/cat-list-item.module.css"
import { getAllCats } from '../api/getAllCats';


// zamiast importować plik data.json napisz funkcję w folderze api podobną do getCatById, która Ci zwróci wszystkie koty lub null
// obsłuz ładowanie i wszystko inne jak w Cat Page

export const CatList = () => {
  
  const cats = getAllCats()
  const [searchParams, setSearchParams] = useSearchParams()
  const availableFilter = searchParams.get("available")

  const displayedCats = availableFilter
  ? (cats.filter(cat => cat.available.toString() === availableFilter))
  : cats

  return (
    <div className={styles.catListContainer}>
      <div className={styles.filterButtons}>
        <Link 
          to="?available=true"
          className={styles.button}
          >Available</Link>
          <Link 
          to="?adoption_fee<fee"
          className={styles.button}
          >fee</Link>
      </div>
      <div className={styles.catList}>
      {displayedCats.map((cat) => (
        <CatListItem
          id={cat.id}
          name={cat.name}
          age={cat.age}
          breed={cat.breed}
          color={cat.color}
          gender={cat.gender}
          image={cat.image}
          description={cat.description}
          adoption_fee={cat.adoption_fee}
          available={cat.available}
        />
      ))}
      </div>
    </div>
  );
}
