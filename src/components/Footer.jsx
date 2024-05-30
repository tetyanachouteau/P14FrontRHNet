import styles from "./Footer.module.css"
import Logo from '../assets/images/logofooter.png'

function Footer() {

    return (
        <footer className={styles.footer}>
            <img src={Logo} alt="Logo HRnet"></img>
            <p>Wealth Health © 2024 HRnet - Tetyana CHOUTEAU</p>
        </footer>

    );
}


export default Footer;



