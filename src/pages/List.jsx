// Importation des bibliothèques et composants nécessaires
import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import styles from './List.module.css';
import Button from '../components/Button';
import Callout from '../components/Callout';
import API from '../services/API';

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

    // États pour les données filtrées et le nombre total de pages
    const [filteredData, setFilteredData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    // useEffect pour récupérer les données des employés et les filtrer
    useEffect(() => {
        const getEmployees = async function () {
            // Appel à l'API pour récupérer les employés
            let data = await API.getEmployees();
            console.log(data);
            // Filtrage des données en fonction du texte de recherche
            setFilteredData(data.filter(item =>
                item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
                item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
                item.startDate.toLowerCase().includes(filterText.toLowerCase()) ||
                item.department.toLowerCase().includes(filterText.toLowerCase()) ||
                item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase()) ||
                item.street.toLowerCase().includes(filterText.toLowerCase()) ||
                item.city.toLowerCase().includes(filterText.toLowerCase()) ||
                item.state.toLowerCase().includes(filterText.toLowerCase()) ||
                item.zipCode.toString().toLowerCase().includes(filterText.toLowerCase())
            ));
            // Calcul du nombre total de pages
            setTotalPages(Math.ceil(data.length / rowsPerPage));
        }
        getEmployees();
    }, [filterText,rowsPerPage]); // Exécuté à chaque changement de filterText

    // Gestion du changement du nombre de lignes par page
    const handlePerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1); // Réinitialiser à la première page
    };

    // Gestion du changement de page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

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
                                <th key={index} className={styles.tableHeader}>{column}</th>
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
