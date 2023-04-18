import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatListPage } from '../pages/cat-list.page';
import { HomePage } from '../pages/home.page';
import { CatPage } from '../pages/cat.page';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatListPage />} />
        <Route path="/cats/:catId" element={<CatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
