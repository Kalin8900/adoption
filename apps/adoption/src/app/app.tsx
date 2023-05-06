import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatListPage } from '../pages/cat-list.page';
import { HomePage } from '../pages/home.page';
import { CatPage } from '../pages/cat.page';
import { Route as AppRoute } from '../routes';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Home} element={<HomePage />} />
        <Route path={AppRoute.Cats} element={<CatListPage />} />
        <Route path={AppRoute.Cat} element={<CatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
