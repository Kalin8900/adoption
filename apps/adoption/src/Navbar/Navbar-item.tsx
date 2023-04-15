import { FC } from 'react';
import styles from '../cat-list-item/cat-list-item.module.css';


interface NavbarProps {
    image: string;
    infoPhone: string;
    infoEmail: string;
    Username: string;
    Password: string;
    signUp: string;
    signIn: string;

}

export const NavbarItem: FC<NavbarProps> = (props) => {
    return (
        <div>
            <nav className={styles.navbar}>
            <img src={props.image} className={styles.navLogo} alt="logo"/>
            <div className={styles.phone}>Phone: <br />{props.infoPhone}</div>
            <div className={styles.email}>Email: <br />{props.infoEmail}</div>
            <form className={styles.form}>
                <input 
                className={styles.Username}
                placeholder="Username"
                />
                <input 
                className={styles.Password}
                placeholder="Password"
                />
            <div className={styles.signUp}>Don't have account? <br />{props.signUp} Now!</div>
            <div className={styles.signIn}>{props.signIn}</div>
            </form>
            </nav>
       </div>
    )
}



