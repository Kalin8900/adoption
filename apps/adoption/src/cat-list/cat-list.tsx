import { CatListItem } from '../cat-list-item/cat-list-item';
import cats from '../api/data.json';

// zamiast importować plik data.json napisz funkcję w folderze api podobną do getCatById, która Ci zwróci wszystkie koty lub null
// obsłuz ładowanie i wszystko inne jak w Cat Page

export const CatList = () => {
  return (
    <div>
      {cats.cats.map((cat) => (
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
  );
};
