import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cat as ICat, getCatById } from '../api/getCatById';
import { CatListItem } from '../cat-list-item/cat-list-item';
import styles from '../cat/cat.module.css';
// import { useApi } from '../hooks/useApi';

export const Cat = () => {
  const { id } = useParams();

  const [cat, setCat] = useState<ICat | null>(null);
  const [isLoading, setIsLoading] = useState(true);

    // const [cat, isLoading] = useApi(() => getCatById(Number(id)))

  useEffect(() => {
    if (id) {
      (async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const cat = getCatById(Number(id));
            setCat(cat);
            setIsLoading(false);
            resolve(cat);
          }, 2000);
        });
      })(); // IIFE
    }
  }, [id]);

  // conditional rendering
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!cat) {
    return <div>404</div>;
  }

  return (
    <div className={styles.CatDetail}>
      <CatListItem {...cat} />
    </div>
  );
};

/* // 1. Napisz Podstawowego Page'a dla kota (Pusty z tytułem) - done
// 2. Link z Cat List Item => CatPage - done
// 3. Route w App => CatPage (wykorzystaj parameter /cat/:id) + w routes.ts - w połowie done

// stan do trzymania kota, który początkowo jest null - done
// stan do sprawdzaniam, czy dane są ładowane - done
// useEffect, który pobiera dane z api i ustawia kota - done
// jeśli kota się łąduje, to wyświetl ładującego się kota - done
// jeśli kota nie ma, to wyświetl 404 - done
// jeśli kot jest, to wyświetl dane kota - done */
