import styles from "./erreur.module.css"
import React from "react";

function Erreur() {
  // Composant pour afficher une page d'erreur 404
  return (
    <div className={styles.erreur}>
      <img src="./images/404.png" alt="Erreur 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  );
}

export default Erreur;
