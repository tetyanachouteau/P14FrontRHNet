import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

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
      </main>
      {/* <main> est une balise HTML utilisée pour: Définir section principale de page et
  Entourer contenu principal d'une page: contenu central, articles, sections, clés, etc.
  Accessibilité - permet aux lecteurs d'écran et aux technologies d'assistance 
  de mieux comprendre la structure de la page. Acces fasile au contenu principal de la page.

  <main> est utilisé pour englober le contenu principal de la page, 
  qui est rendu à l'aide de la composante <Outlet />. 
  Cette structure permet de séparer le contenu principal du reste de page,
  ce qui est une pratique recommandée pour la conception web.
  */}

      <Footer />
    </div>
  );
}

export default Layout;
