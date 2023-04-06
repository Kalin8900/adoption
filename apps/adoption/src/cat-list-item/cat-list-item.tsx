import { FC } from 'react';
import styles from './cat-list-item.module.css';

interface CatListItemProps {
  name: string;
  age: number;
  breed: string;
  color: string;
  gender: string;
  size: string;
  image: string;
  description: string;
  adoption_fee: number;
}

export const CatListItem: FC<CatListItemProps> = (props) => {
  return (
    <div className={styles.cats}>
      {props.name} <br />Age: {props.age} <br />Description:  {props.description}
      <img src={props.image} alt="głaskać kotki wciągać kreski"/>
    </div>
  );
};
