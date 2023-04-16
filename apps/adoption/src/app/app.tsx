import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatListPage } from '../pages/cat-list.page';
import { HomePage } from '../pages/home.page';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cats" Component={CatListPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
