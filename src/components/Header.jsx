import styles from "./Header.module.css"
import Navigation from './Navigation';
function Header() {

    return (
        <header className={styles.header}>
            <img src="/logo.png" alt="Logo HRnet"></img>
            <div class="title">
                <h1>HRnet</h1>
            </div>
            <Navigation />
        </header>
    );
}


export default Header;