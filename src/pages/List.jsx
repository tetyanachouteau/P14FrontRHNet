// Importation des bibliothèques et composants nécessaires
import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import styles from './List.module.css';
import Button from '../components/Button';
import Callout from '../components/Callout';
import API from '../services/API';
import bothImage from '../assets/images/sort_both.png';
import ascImage from '../assets/images/sort_asc.png';
import descImage from '../assets/images/sort_desc.png';
//import UseState

function List() {
    // États pour la gestion des données du formulaire et de la pagination
    const [filterText, setFilterText] = useState(''); // Texte de recherche
    const [rowsPerPage, setRowsPerPage] = useState(10); // Nombre de lignes par page
    const [currentPage, setCurrentPage] = useState(1); // Page courante

    // Colonnes à afficher dans le tableau
    const columns = [
        'First name',
        'Last name',
        'Start date',
        'Date of birth',
        'Street',
        'City',
        'State',
        'Zip Code',
        'Department',
    ];

    const defaultSort = columns.map(el => { return { "columnName": el, "sort": bothImage }; })
    const [sortColumn, setSortColumn] = useState(defaultSort);

    // États pour les données filtrées et le nombre total de pages
    const [filteredData, setFilteredData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [filteredUnsortedData, setFilteredUnsortedData] = useState([]);

    // useEffect pour récupérer les données des employés et les filtrer
    useEffect(() => {
        const getEmployees = async function () {
            // Appel à l'API pour récupérer les employés
            let data = await API.getEmployees();
            console.log(data);
            let searchedData = data.filter(item =>
                item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
                item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
                item.startDate.toLowerCase().includes(filterText.toLowerCase()) ||
                item.department.toLowerCase().includes(filterText.toLowerCase()) ||
                item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase()) ||
                item.street.toLowerCase().includes(filterText.toLowerCase()) ||
                item.city.toLowerCase().includes(filterText.toLowerCase()) ||
                item.state.toLowerCase().includes(filterText.toLowerCase()) ||
                item.zipCode.toString().toLowerCase().includes(filterText.toLowerCase())
            );
            // conserve les données filtrée mais pas trié pour pouvoir revenir au tri par défaut
            setFilteredUnsortedData(searchedData);
            // Filtrage des données en fonction du texte de recherche
            setFilteredData(searchedData);
            // Calcul du nombre total de pages
            let nbpage = Math.ceil(searchedData.length / rowsPerPage);
            setTotalPages(nbpage > 0 ? nbpage : 1);
        }
        getEmployees();
    }, [filterText, rowsPerPage]); // Exécuté à chaque changement de filterText

    // Gestion du changement du nombre de lignes par page
    const handlePerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1); // Réinitialiser à la première page
    };

    // Gestion du changement de page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSortColumns = (e) => {
        //récupère les données filtrées mais non trié
        let data = [...filteredUnsortedData];
        // récupère le texte qui est dans le th qui vient d'être cliqué
        let column = e.target.textContent
        // récupère le sens de tri de la colonne en cherchant dans le tableau de sens le nom de la colonne (trouvée au dessus) (XX)
        let sens = sortColumn.find(el => el.columnName === column).sort;
        // calcule le nouveau sens. le sens est une image !!!
        // si sens était l'image both (deux fleches) alors le nouveau sens est l'image flêche en haut
        // si sens était l'image asc (fleche haut) alors le nouveau sens est l'image flêche en bas 
        // si sens était l'image desc (flechebas) alors le nouveau sens est l'image deux fleches
        sens = sens === bothImage ? ascImage : sens === ascImage ? descImage : bothImage;
        // on met dans le tableau des sens des colonnes, toutes les colonnes à deux fleches sauf la colonne clique qui prend l'image contenu dans sens
        let newSortColumn = defaultSort.map(el =>  { 
            if(el.columnName === column) 
                return { "columnName": el.columnName, "sort": sens } 
            else 
                return { "columnName": el.columnName, "sort": bothImage }
        });
        // mise à jour via useState, ce qui declanche la mise à jour de l'image sur la colonne
        setSortColumn(newSortColumn);
        // pour debugger et savoir le sens de la colonne car les valeurs des images c'est pas pratique 
        let asc = sens === ascImage;
        let dsc = sens === descImage;
        let both = sens === bothImage;
        // si on doit trier (asc ou dsc)
        if (sens !== bothImage) {
            // tri asc
            data.sort((a, b) => {
                if (column === 'First name') {
                    return a.firstName.localeCompare(b.firstName)
                } else if (column === 'First name') {
                    return b.firstName.localeCompare(a.firstName)
                } else if (column === 'Last name') {
                    return a.lastName.localeCompare(b.lastName)
                } else if (column === 'Start date') {
                    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
                } else if (column === 'Department') {
                    return a.department.localeCompare(b.department)
                } else if (column === 'Date of birth') {
                    return new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime()
                } else if (column === 'Street') {
                    return a.street.localeCompare(b.street)
                } else if (column === 'City') {
                    return a.city.localeCompare(b.city)
                } else if (column === 'State') {
                    return a.state.localeCompare(b.state)
                } else {
                    return a.zipCode - b.zipCode
                }
            });
            // si en fait c'était desc, on inverse le tableau
            if (sens === descImage) 
                data.reverse();
        }
        // sinon on a juste les données filtrées mais non triées
        // ici on met à jour les données à afficher pour qu'il réaffiche le tableau trié par la colonne
        setFilteredData(data);
    }

    return (
        <div className={styles.content}>
            <div className={styles.home}>
                <h1 className={styles.h1}>Current employees</h1>
                <Callout
                    title={"Search info"}
                    type={"info"}
                    className={styles.calloutList}
                >
                    <p>🛈 If you want to find an employee from this list or check if a new employee is already registered, you can enter the person's Last name in the search field.</p>
                </Callout>

                <Input
                    controlId="search"
                    label="Search employee"
                    type="text"
                    placeholder="Search Last name"
                    value={filterText}
                    onChange={e => setFilterText(e.target.value)}
                    className={styles.search} />

                <Callout
                    title={"How to sort the list"}
                    type={"info"}
                    className={styles.calloutList}
                ><p>🛈 HRnet is an internal web application that manages employee records. On this page, you can view the list of employees, and on the home page, you can handle employee registrations. This page allows you to sort the list by name, date of birth, and city.</p>
                </Callout>
                <div className={styles.controls}>
                    <label className={styles['entrieslabel']}>
                        <h3>Show</h3>
                        <select
                            value={rowsPerPage}
                            onChange={handlePerPageChange}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                        <h3>entries</h3>
                    </label>
                </div>

                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            {/* Boucle à travers les colonnes définies et génère un en-tête de tableau pour chacune */}
                            {columns.map((column, index) => (
                                // Utilise l'index comme clé unique pour chaque en-tête
                                <th key={index} className={styles.tableHeader} onClick={handleSortColumns} style={{ backgroundImage: `url(${/*XX*/sortColumn.find(el => el.columnName === column).sort})` }}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Filtre les données affichées en fonction de la page courante et du nombre de lignes par page */}
                        {filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, index) => (
                            // Génère une ligne de tableau pour chaque élément filtré
                            <tr key={index} className={styles.tableRow}>
                                {/* Boucle à travers chaque propriété de l'objet row pour générer les cellules */}
                                {Object.keys(row).map((cell, indexCell) => (
                                    // Utilise l'index de la cellule comme clé unique pour chaque cellule
                                    <td key={indexCell} className={styles.tableCell}>{row[cell]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={styles.pagination}>
                    <Button
                        className={styles.buttonGreen}
                        variant="primary" type="submit"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    > Previous</Button>
                    <div className={styles.pageInfo}>{`Page ${currentPage} of ${totalPages}`}</div>
                    <Button
                        className={styles.buttonGreen}
                        variant="primary"
                        type="submit"
                        onClick={() => handlePageChange(currentPage + 1)} // Lorsqu'on clique sur ce bouton, la page courante augmente de 1
                        disabled={currentPage === totalPages || totalPages === 1} // Le bouton est désactivé si la page courante est la dernière page
                    >Next</Button>

                </div>
            </div>
        </div>
    );
}

export default List;
