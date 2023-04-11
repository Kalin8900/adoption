import { FC } from 'react';
import styles from '../cat-list-item/cat-list-item.module.css';


interface NavbarProps {
    image: string;
    infoPhone: string;
    infoEmail: string;


}

export const NavbarItem: FC<NavbarProps> = (props) => {
    return (
        <nav className={styles.navbar}>
            <img src={props.image} className={styles.navLogo} alt="logo"/>
            <div className={styles.phone}>Phone: {props.infoPhone}</div>
            <div className={styles.email}>Email: {props.infoEmail}</div>
        </nav>
    )
}

