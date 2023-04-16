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
            <div className={styles.phoneIcon} />
            <div className={styles.phone}>{props.infoPhone}</div>
            <div className={styles.emailIcon} />
            <div className={styles.email}>{props.infoEmail}</div>
            <ul className={styles.menu}>
                <li className={styles.menuHome}>Home</li>
                <li className={styles.menuAllCats}>Cats</li>
                <li className={styles.menuInfo}>Information</li>
                <li className={styles.menuEducation}>Education</li>
            </ul>   
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



