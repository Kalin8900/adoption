import { createBrowserRouter, Route,  RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { CatListPage } from '../pages/cat-list.page';
import { HomePage } from '../pages/home.page';
import { CatPage } from '../pages/cat.page';
import { InfoPage } from '../pages/info.page';
import { Route as AppRoute } from '../routes';
import { Layout } from '../layout/layout';
import { loader as CatListLoader} from "../cat-list/cat-list";
// import { loader as CatPageLoader} from "../cat/cat"
import { Error } from "../error/error"
import { LoginPage } from '../pages/login.page';
import { loader as loginLoader, action as loginAction } from "../login/login"
import { requireAuth } from '../utils';
import { AccountPage } from "../pages/user.page"

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path={AppRoute.Home} element={<Layout />}>
      <Route index element={<HomePage />}/>
      <Route path={AppRoute.Login} element={<LoginPage />} loader={loginLoader} action={loginAction}/>
      <Route path={AppRoute.Cats} element={<CatListPage />} loader={CatListLoader}  errorElement={<Error />} />
      <Route path={AppRoute.Cat} element={<CatPage />}/>
      <Route path={AppRoute.Info} element={<InfoPage />} />
      <Route path={AppRoute.User} element={<AccountPage />} />
    </Route>
  ))

export function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
