import { Cat } from '../cat/cat';

export const CatPage = () => {
  return (
      <Cat />
  );
};

// 1. Napisz Podstawowego Page'a dla kota (Pusty z tytułem)
// 2. Link z Cat List Item => CatPage
// 3. Route w App => CatPage (wykorzystaj parameter /cat/:id) + w routes.ts

// stan do trzymania kota, który początkowo jest null
// stan do sprawdzaniam, czy dane są ładowane
// useEffect, który pobiera dane z api i ustawia kota
// jeśli kota się łąduje, to wyświetl ładującego się kota
// jeśli kota nie ma, to wyświetl 404
// jeśli kot jest, to wyświetl dane kota
