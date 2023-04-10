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
    
    let badgeText: string
      if (props.available) {
        badgeText = ""
      } else {
        badgeText = "Reserved";
      }
    
    return (
    <div className={styles.cats}>
      {!props.available && <div className="badge">{badgeText}</div>}
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
