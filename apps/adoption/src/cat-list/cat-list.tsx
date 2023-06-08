import  React from 'react';
import { CatListItem } from '../cat-list-item/cat-list-item';
import { Link, useSearchParams,  useLoaderData, defer, Await  } from 'react-router-dom';
import styles from "../cat-list-item/cat-list-item.module.css"
import { getAllCats } from '../api/getAllCats';
import { Cat } from '../api/getCatById';

export function loader() {
  return getAllCats()
}

export const CatList = () => {

  const cats = useLoaderData() as Cat[]
  const [searchParams, setSearchParams] = useSearchParams()
  const availableFilter = searchParams.get("available")
  // const feeFilter = searchParams.get("adoption_fee")

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
          {/* <select
          id="fee"
          value="adoption_fee"
          name="fee"
        >
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select> */}
        <Link
          to="/cats"
          relative="path"
          className={styles.button}
          >Clear filters</Link>
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
