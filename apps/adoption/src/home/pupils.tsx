import React from "react"
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { FC } from 'react';
import { getAllCats } from "../api/getAllCats";


interface PupilsListItemProps {
    id: number;
    name: string;
    image: string;
    available: boolean;
  }


export const PupilsProps: FC<PupilsListItemProps> = (props) => {

    const Pupils = getAllCats();
    <div>
    {Pupils.map((cat) => (
      <PupilsProps
        id={cat.id}
        name={cat.name}
        image={cat.image}
        available={cat.available}
      />
    ))}
    </div>

    return (
    
    <div key={props.id} className={styles.containerCats}>
        <Link to={`/cats/${props.id}`}>
        <div className={styles.cats}>
            <img
            src={props.image}
            className={styles.catsImage}
            alt="głaskać kotki wciągać kreski"
            />
            <div className={styles.catsName}>{props.name}</div>
        </div>
        </Link>
    </div>
    )
}


