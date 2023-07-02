import { Link } from 'react-router-dom';
import Image from '../assets/catdoption-low-resolution-color-logo.png';
import styles from '../navbar/navbar.module.css';
import { Route } from '../routes';
import { useGetIsCurrentPath } from '../api/useIsCurrentPath';
import Icon from "../assets/cat-profile.png"

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
          <li className={styles.menuLink}>
            <Link
              className={isCurrentPath(Route.Info) ? styles.active : ''}
              to={Route.Info}
            >
              Info
            </Link>
          </li>
        </ul>
        <Link 
          to={Route.Login}
          className={isCurrentPath(Route.Login) ? styles.active : ''}>
          <img 
            alt="avatar"
            src={Icon}
            className={localStorage.getItem("loggedin") === "true" ? styles.logged : styles.loginIcon}
            // className={styles.loginIcon}
          />
        </Link>
      </nav>
    </div>
  );
};
