// Dashboard.jsx

// Import des bibliothèques et composants nécessaires depuis React et d'autres fichiers
import React, { useEffect, useState } from 'react';
//import HeaderDashboard from '../components/HeaderDashboard';
//import Activity from '../components/Activity';
import styles from './dashboard.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

// Import de la fonction getProfil depuis le fichier de services profilRequest
//import getProfil from '../services/profilRequest';

// Déclaration du composant Dashboard
function Dashboard() {
    // Récupération de l'ID depuis les paramètres d'URL à l'aide de useParams
    let { id } = useParams();

    // Initialisation de la fonction de navigation pour rediriger l'utilisateur
    const navigate = useNavigate();

    // Initialisation du state pour stocker les données du profil
    const [profil, setProfil] = useState(null);

    // Effet useEffect pour récupérer les données du profil lors du chargement du composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Appel à la fonction getProfil pour obtenir les données du profil en fonction de l'ID
               // const profilData = await getProfil(id);

                // Mise à jour du state avec les données du profil récupérées
               // setProfil(profilData);
            } catch (erreur) {
                // En cas d'erreur, redirection vers la page d'erreur
                navigate("/erreur");
            }
        }

        // Appel de la fonction fetchData
        fetchData();
    }, [id, navigate]); // Dépendance à l'ID pour que l'effet se déclenche à chaque changement d'ID

    // Vérification si les données du profil existent
    if (profil) {
        // Affichage du composant Dashboard avec les données du profil
        return (
            <div className={styles['dashboard-container']}>
            Dashboard
            </div>
        );
    } else {
        // Redirection vers la page d'erreur si les données du profil n'existent pas encore
        return <Navigation to="/erreur" />
    }
}

// Export du composant Dashboard par défaut
export default Dashboard;
