import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Libellule from './Libellule';

function Layout() {
  // Composant de mise en page global de l'application.
  // Layout inclut en-tête ("Header"), pied de page ("Footer"), 
  //et point de sortie ("Outlet") pour afficher contenu spécifique à chaque page. 
  //Les styles sont gérés via le fichier CSS externe "Layout.module.css".
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
        <Libellule/>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
