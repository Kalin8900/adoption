import { Link } from 'react-router-dom';
import Image from '../assets/catdoption-low-resolution-color-logo.png';
import styles from '../navbar/navbar.module.css';
import { Route } from '../routes';
import { useGetIsCurrentPath } from '../api/useIsCurrentPath';

export const Navbar = () => {
  const isCurrentPath = useGetIsCurrentPath();

  return (
    <div>
      <nav className={styles.navbar}>
        <img src={Image} className={styles.navLogo} alt="logo" />
        <div className={styles.phoneIcon} />
        <div className={styles.phone}>123 456 789</div>
        <div className={styles.emailIcon} />
        <div className={styles.email}>catdoption@cat.com</div>
        <ul className={styles.menu}>
          <li className={styles.menuLink}>
            <Link
              className={isCurrentPath(Route.Home) ? styles.active : ''}
              to={Route.Home}
            >
              Home
            </Link>
          </li>
          <li className={styles.menuLink}>
            <Link
              className={isCurrentPath(Route.Cats) ? styles.active : ''}
              to={Route.Cats}
            >
              Cats
            </Link>
          </li>
        </ul>
        <form className={styles.form}>
          <input className={styles.Username} placeholder="Username" />
          <input className={styles.Password} placeholder="Password" />
          <div className={styles.signUp}>
            Don't have account? <br />
            Sign Up Now!
          </div>
          <div className={styles.signIn}>Sign in</div>
        </form>
      </nav>
    </div>
  );
};
