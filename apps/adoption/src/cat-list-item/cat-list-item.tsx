import { FC } from 'react';
import styles from './cat-list-item.module.css';

interface CatListItemProps {
  name: string;
}

export const CatListItem: FC<CatListItemProps> = (props) => {
  return <div className={styles.asdf}>{props.name}</div>;
};
