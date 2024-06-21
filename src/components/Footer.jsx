import styles from "./Footer.module.css"
import Logo from '../assets/images/logofooter.png'

function Footer() {

    return (
        <footer className={styles.footer}>
            <p >HRnet - Wealth Health</p>
            <img src={Logo} alt="Logo HRnet" />
        </footer>
    );
}

export default Footer;



