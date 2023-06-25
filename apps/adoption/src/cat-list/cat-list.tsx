import  React, { useState } from 'react';
import { CatListItem } from '../cat-list-item/cat-list-item';
import { Link, useSearchParams,  useLoaderData, defer, Await } from 'react-router-dom';
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

  /// Range Slider
  const [value, setValue] = useState<number []>([25, 220]);
      
  const handleChange = (event: Event, newValue: number | number []) => {
      setValue(newValue as number[])
  }

  const feeFilter = cats.filter(cat => {
    return (cat.adoption_fee >= value[0] && cat.adoption_fee <= value[1])
  })
  ///

  /// clear filters button
  const clearFilters = () => {
    setValue([25,220])
    setSearchParams()
  }
  const disabledButton = (availableFilter || genderFilter ? false : true) && (value[0] === 25 && value[1] === 220)
  ///

  /// Filters
  const availableCats = availableFilter
  ? (cats.filter(cat => (cat.available.toString() === availableFilter)))
  : cats

  const genderCats = genderFilter
  ? (cats.filter(cat => (cat.gender === genderFilter)))
  : cats


  const filteredCats = genderCats.filter(cat => availableCats.includes(cat))
  const searchedCats = filteredCats.filter(cat => searchCats.includes(cat))
  const displayedCats = searchedCats.filter(cat => feeFilter.includes(cat))
  ///

  return (
    <div className={styles.catListContainer}>
      <div className={styles.filterButtons}> 
        <div className={styles.slider}>
          <RangeSlider 
          value={value}
          handleChange={handleChange}
          />
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
            disabled={disabledButton}
            onClick={() => clearFilters()}
            className={!disabledButton ? styles.button : styles.disabledButton}
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
