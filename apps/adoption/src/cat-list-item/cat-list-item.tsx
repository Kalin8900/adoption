import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './cat-list-item.module.css';

interface CatListItemProps {
  id: number;
  name: string;
  age: number;
  breed: string;
  color: string;
  gender: string;
  image: string;
  description: string;
  adoption_fee: number;
  available: boolean;
}


export const CatListItem: FC<CatListItemProps> = (props) => {
  const badgeText = 'Reserved';


  return (
    <div key={props.id} className={styles.containerCats}>
      <Link to={`/cats/${props.id}`}>
        <div className={styles.cats}>
          {!props.available && <div className={styles.badge}>{badgeText}</div>}
          <img
          src={props.image}
          className={styles.catsImage}
          alt="głaskać kotki wciągać kreski"
          />
          <div className={styles.catsName}>{props.name}</div>
          <div className={styles.catsInfo}>
            Age: {props.age} <br />
            Breed: {props.breed} <br />
            Gender: {props.gender}
          </div>
        </div>
      </Link>
    </div>
  )

};
