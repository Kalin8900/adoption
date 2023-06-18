import  React, { useState } from 'react';
import { CatListItem } from '../cat-list-item/cat-list-item';
import { Link, useSearchParams,  useLoaderData, defer, Await  } from 'react-router-dom';
import styles from "../cat-list-item/cat-list-item.module.css"
import { getAllCats } from '../api/getAllCats';
import { Cat } from '../api/getCatById';
import { SearchBar } from './searchbar';
import { RangeSlider } from './range-slider';


export function loader() {
  return getAllCats()
}

export const CatList = () => {

  const cats = useLoaderData() as Cat[]
  const [searchParams, setSearchParams] = useSearchParams()
  const availableFilter = searchParams.get("available")
  // const feeFilter = searchParams.get("adoption_fee")
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

/// Search Bar

  const [input, setInput] = useState<string>("")

  const searchCats = cats.filter(cat => {
    return cat.name.toLocaleLowerCase().includes(input.toLowerCase())
  })

  const updateInput = (input: string) => {
    setInput(input)
  }

///

  function clearFilters(){
    setSearchParams()
  }
/// Filters

  const availableCats = availableFilter
  ? (cats.filter(cat => (cat.available.toString() === availableFilter)))
  : cats

  const genderCats = genderFilter
  ? (cats.filter(cat => (cat.gender === genderFilter)))
  : cats


  const filteredCats = genderCats.filter(cat => availableCats.includes(cat))
  const displayedCats = filteredCats.filter(cat => searchCats.includes(cat))

///

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
        <button
          onClick={() => handleFilterChange("gender", "Male")}
          className={genderFilter === "Male" ? styles.buttonActive : styles.button}
          >Male
        </button>
        <button
          onClick={() => handleFilterChange("gender", "Female")}
          className={genderFilter === "Female" ? styles.buttonActive : styles.button}
          >Female
        </button>
        <button
          disabled={availableFilter || genderFilter ? false : true}
          onClick={() => clearFilters()}
          className={availableFilter || genderFilter ? styles.button : styles.disabledButton}
          >Clear filters
        </button>
      </div>
      <div className={styles.searchBar}>
        <SearchBar
        input={input}
        onChange={updateInput}
        />
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
