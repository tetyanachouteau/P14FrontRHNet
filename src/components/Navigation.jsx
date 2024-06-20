import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import papillon from '../assets/images/papillon.png';

// Définition du composant "Navigation"          
function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul>
        <li className={styles.li}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
            <img src={papillon} className={styles.papillon} alt="papillon" />Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/list" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
            List-employees
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
