import { CatList } from '../cat-list/cat-list';
import { CatListItem } from '../cat-list-item/cat-list-item';
import { Navbar } from '../Navbar/Navbar';
import { NavbarItem } from "../Navbar/Navbar-item";



export function App() {
  return (
    <>
      <Navbar />
      <br />
      <CatList />;
    </>
  )
}

export default App;
