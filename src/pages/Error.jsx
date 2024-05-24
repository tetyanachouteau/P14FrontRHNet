import styles from "./Error.module.css"
import React from "react";
import Error404 from "../assets/images/404.png"

function Erreur() {
  // Composant pour afficher une page d'erreur 404
  return (
    <div className={styles.erreur}>
      <img src={Error404} alt="Error 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  );
}

export default Erreur;
