import styles from "./Header.module.css"
import Navigation from './Navigation';
import Logo from '../assets/images/logo.png'
import background from '../assets/images/headerimg.png'

function Header() {

    return (
        <header className={styles.header} style={{backgroundImage: `url(${background})`}}>
            <img className={styles.logo} src={Logo} alt="Logo HRnet"></img>
            <Navigation className={styles.navigation}/>
        </header>
    );
}


export default Header;