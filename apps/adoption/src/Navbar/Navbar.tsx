import { FC } from 'react';
import styles from '../cat-list-item/cat-list-item.module.css';


interface NavbarProps {
    image: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    return (
        <nav className={styles.navbar}>
            <img src={props.image} className={styles.navLogo} alt="logo"/>
        </nav>
    )
}

