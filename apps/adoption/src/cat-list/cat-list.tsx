import { CatListItem } from '../cat-list-item/cat-list-item';
import cats from './data.json';

export const CatList = () => {
  return (
    <div>
      {cats.cats.map((cat) => (
        <CatListItem 
          name={cat.name}
          age={cat.age}
          breed={cat.breed}
          color={cat.color}
          gender={cat.gender}
          size={cat.size}
          image={cat.image}
          description={cat.description}
          adoption_fee={cat.adoption_fee}
           />
      ))}
    </div>
  );
};
