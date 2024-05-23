import styles from "./Header.module.css"
import Navigation from './Navigation';
function Header() {

    return (
        <header className={styles.header}>
            <img src="/LOGO.png" alt="Logo Kasa"></img>
            <Navigation />
        </header>
    );
}


export default Header;