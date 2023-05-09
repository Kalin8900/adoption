import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatListPage } from '../pages/cat-list.page';
import { HomePage } from '../pages/home.page';
import { CatPage } from '../pages/cat.page';
import { InfoPage } from '../pages/info.page';
import { Route as AppRoute } from '../routes';
import { Layout } from '../layout/layout';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Home} element={<Layout />}>
          <Route path={AppRoute.Home} element={<HomePage />} />
          <Route path={AppRoute.Cats} element={<CatListPage />} />
          <Route path={AppRoute.Cat} element={<CatPage />} />
          <Route path={AppRoute.Info} element={<InfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
