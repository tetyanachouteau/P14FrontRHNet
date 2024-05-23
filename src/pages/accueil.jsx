import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./accueil.module.css";

function Accueil({ data }) {
    // Extraction des données de la propriété "data"
    //const { name, id } = data;
  
    return (

        
        <div className={styles.profilContainer}>
            <h1>SportSee - vers Dashboard</h1>
            <Link to={"/dashboard/12"} className={styles.dashboardButton} >
            <p>Profil de Karl ID12</p><h2>Karl</h2>
            </Link>
        </div>
    );
}

export default Accueil;
