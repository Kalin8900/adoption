import { CatListItem } from '../cat-list-item/cat-list-item';
import cats from './data.json';

export const CatList = () => {
  return (
    <div>
      {cats.cats.map((cat) => (
        <CatListItem name={cat.name} />
      ))}
    </div>
  );
};
