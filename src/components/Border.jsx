import styles from "./Border.module.css"
import bouquet from '../assets/images/bouquet.png'

function Border() {

    return (
        <div className={styles.border} style={{ backgroundImage: `url(${bouquet})` }}></div>
    );
}

export default Border;