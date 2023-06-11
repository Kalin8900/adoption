import  React from 'react';
import { CatListItem } from '../cat-list-item/cat-list-item';
import { Link, useSearchParams,  useLoaderData, defer, Await  } from 'react-router-dom';
import styles from "../cat-list-item/cat-list-item.module.css"
import { getAllCats } from '../api/getAllCats';
import { Cat } from '../api/getCatById';
import SearchBar from "../cat-list/searchbar"
import { RangeSlider } from './range-slider';

export function loader() {
  return getAllCats()
}

export const CatList = () => {

  const cats = useLoaderData() as Cat[]
  const [searchParams, setSearchParams] = useSearchParams()
  const availableFilter = searchParams.get("available")
  const feeFilter = searchParams.get("adoption_fee")
  const genderFilter = searchParams.get("gender")

  function handleFilterChange(key: string, value: string) {
    setSearchParams(prevParams => {
        if (value === "null") {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
}

  const displayedCats = availableFilter
  ? (cats.filter(cat => (cat.available.toString() === availableFilter)))
  : cats


  return (
    <div className={styles.catListContainer}>
      <div className={styles.filterButtons}> 
      <div className={styles.slider}>
        <RangeSlider />
      </div>
        <button
          onClick={() => handleFilterChange("available", "true")}
          className={availableFilter === "true" ? styles.buttonActive : styles.button}
          >Available
        </button>
        {availableFilter || feeFilter || genderFilter ? (
        <button
          onClick={() => handleFilterChange("available", "null")}
          className={styles.button}
          >Clear filters
        </button>)
        : null}
      </div>
      <div className={styles.searchBar}>
        <SearchBar/>
      </div>
      <div className={styles.catList}>
      {displayedCats?.map((cat) => (
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
