import { Navbar } from '../navbar/navbar';
import styles from '../cat/cat.module.css';

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <br />
      <h1 className={styles.CatDetail}>Home Page</h1>;
    </>
  );
};
