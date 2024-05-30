import React from 'react';
import styles from './Libellule.module.css';
import libellule from '../assets/images/libellule.png'

function Libellule() {

    const goTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className={styles.libellule} onClick={goTop}>
            <img class={styles.image} src={libellule} alt="Revenir en haut" />
        </div>
    )

}

export default Libellule