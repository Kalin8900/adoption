import { FC } from 'react';
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
    <div className={styles.containerCats}>
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
    </div>
  );
};
