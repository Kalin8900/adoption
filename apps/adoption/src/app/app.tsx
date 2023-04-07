import { CatList } from '../cat-list/cat-list';
import { Navbar } from "../Navbar/Navbar";
import logo from "../catdoption-low-resolution-color-logo.png"

export function App() {
  return (
    <>
      <Navbar image={logo}/>
      <br />
      <CatList />;
    </>
  )
}

export default App;
