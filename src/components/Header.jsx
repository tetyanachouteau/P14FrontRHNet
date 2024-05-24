import styles from "./Header.module.css"
import Navigation from './Navigation';
import Logo from '../assets/images/logo.png'
function Header() {

    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo HRnet"></img>
            <div class="title">
                <h1>HRnet</h1>
            </div>
            <Navigation />
        </header>
    );
}


export default Header;