import styles from "./Navigation.module.css"
import { NavLink } from 'react-router-dom';
import papillon from '../assets/images/papillon.png'

//Lien redirige vers la page d'accueil, qui est généralement définie
// avec le chemin "/" dans React Router.

//className={({ isActive }) => (isActive ? styles.activeLink : ""): 
//C'est la prop className de NavLink. Cette prop permet de définir la classe CSS 
//qui sera appliquée au lien. 

//Fonction fléchée qui prend un argument isActive. 
//Cette fonction vérifie si le lien est actif (c'est-à-dire si l'URL 
//correspond au chemin spécifié dans to) et, si c'est le cas, 
//elle applique la classe CSS styles.activeLink. 

//Sinon, elle applique une chaîne de classe vide (""), 
//ce qui signifie qu'aucune classe supplémentaire n'est appliquée.

//Accueil: C'est le texte ou le contenu du lien qui sera affiché à l'utilisateur. 

// Définition du composant "Navigation"          
function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul>

        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
          <img src={papillon} className={styles.papillon} alt="papillon" />Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
            List-employees
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
