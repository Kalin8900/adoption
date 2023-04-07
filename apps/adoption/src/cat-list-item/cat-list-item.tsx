import { FC } from 'react';
import styles from './cat-list-item.module.css';

interface CatListItemProps {
  name: string;
  age: number;
  breed: string;
  color: string;
  gender: string;
  image: string;
  description: string;
  adoption_fee: number;
}

export const CatListItem: FC<CatListItemProps> = (props) => {
  return (
    <div className={styles.cats}>
      <img src={props.image} className={styles.catsImage} alt="głaskać kotki wciągać kreski"/>
      <div className={styles.catsName}>
      {props.name}
      </div>
      <div className={styles.catsInfo}>
      Age: {props.age} <br />Description:  {props.description}
      </div>
    </div>
  );
};
