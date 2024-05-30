import styles from "./Error.module.css"
import React from "react";
import Border from "../components/Border";

function Erreur() {
  // Composant pour afficher une page d'erreur 404
  return (
    <div className={styles.content}>
      <Border/>
      <div className={styles.erreur}>
        <p className={styles.big}>404</p>
        <p>Oops! The page you are requesting does not exist.</p>
      </div>
    </div>
  );
}

export default Erreur;
