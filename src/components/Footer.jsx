import styles from "./Footer.module.css"
import Logo from '../assets/images/logofooter.png'

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.text}>
                <div className={styles.footer}>
                    <div className={styles.footerContent}>
                        <p className={styles.name}>HRnet - Wealth Health - tetyana.chouteau@gmail.com</p>
                        <img src={Logo} alt="Logo HRnet" /> </div>
                </div>

                <h1>Génériques : Marché des fleurs</h1>

                <h2>Marché français</h2>
                <p className={styles.p}>Le marché français des fleurs et plantes d'intérieur représentait un montant total d'environ 1,6 Md€ en 2023. Il inclut les plantes fleuries, les fleurs coupées, les plantes vertes, les compositions florales, les bottes préparées, etc. En 2022, les quelques 13 200 fleuristes français captaient 46% des ventes en valeur.</p>

                <p>La fleur est aussi une industrie, qui évolue aussi rapidement et en production et en distribution sous l'impact de la numérisation et des enjeux écologiques.</p>

                <p>En France, la profession horticole, avec l'appui du ministère de l'agriculture, tente d'amener les consommateurs à privilégier des fournisseurs nationaux, dont la surface cultivée déclinait progressivement, à travers :</p>

                <ul>
                    <li className={styles.li}>la création d'un label « fleurs de France », lorsque plus de 50 % des composants d'un bouquet a poussé sur le territoire national. Et aussi, la définition d’une charte de qualité, la mise en œuvre de certifications (ex : plante bleue);</li>
                    <li className={styles.li}>des mesures nationales pour soutenir la filière horticole depuis 2016 avec des déclinaisons régionales et des relais, notamment dans les aires les plus concernées, comme le Val de Loire, l'Auvergne, la Provence (ex : contrat de filière);</li>
                </ul>


                <p>Sur le secteur des magasins de fleurs, secteur encore très féminin, en franchise, on peut ainsi identifier 3 principaux acteurs : le groupe EMOVA (Monceau Fleurs, Au Nom de la Rose) et le groupe Flora Nova (Le Jardin des Fleurs, Oya Fleurs), l'enseigne indépendante Carrément Fleurs.</p>

                <p>Alors si vous souhaitez ouvrir une boutique de fleurs en France en 2022, privilégiez la franchise pour bénéficier des atouts d'une enseigne reconnue et, surtout, de nombreux avantages concurrentiels.</p>


                <h2>Marché modial</h2>
                <p>Ce marché est en fait mondial, puisque 85 % des fleurs coupées qui finissent dans nos vases viennent de l'étranger (Colombie, Kenya, Éthiopie, Israël, Equateur… et maintenant aussi Chine) et que dans neuf cas sur dix, elles ont transité par les Pays-Bas, plaque tournante du business de l'horticulture, qui représente 60 % du marché mondial.</p>

                <h3>Système de vente au cadran à la bource</h3>

                <p>La bourse d'Aalsmeer, près d'Amsterdam, est connue comme le « Wall Street de la fleur ». Pour faciliter la vente de fleurs, les Hollandais ont mis en place un système efficace denchères inversées. Concrètement, les lots de fleurs sont affichés sur les écrans électroniques présents dans la salle de bourse et appelés le « cadran », avec toutes les informations nécessaires pour connaitre la provenance, le producteur, la qualité, la quantité disponible, etc.</p>

                <p>Les enchères sont dégressives : on part d'un prix élevé et le prix de vente proposé baisse rapidement sur le cadran, le premier acheteur (ou broker) se manifestant emportant alors la vente.</p>

            </div>
        </footer>

    );
}


export default Footer;



