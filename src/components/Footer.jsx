import styles from "./Footer.module.css"

function Footer() {

    return (
        <footer className={styles.footer}>
            <img src="/logo.png" alt="Logo HRnet"></img>
            <p>© 2024 HRnet. All rights reserved</p>
        </footer>

    );
}


export default Footer;



