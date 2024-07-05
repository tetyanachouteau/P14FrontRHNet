import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './List.module.css';
import Button from '../components/Button';
import Callout from '../components/Callout';

function List() {
    const [filterText, setFilterText] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

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

    const data = [
        {

            firstName: 'Tetyana',
            lastName: 'Chouteau',
            dateOfBirth: '27/10/1978',
            startDate: '1988',
            street: '55 rue Blaise Pierre',
            city: 'Argenteuil',
            state: 'Val-d\'Oise',
            zipCode: 95100,
            department: 'Dev',
        },
        {
            firstName: 'New First Name',
            lastName: 'New Last Name',
            dateOfBirth: '27/10/1978',
            startDate: '1988',
            street: '55 rue Blaise Pierre',
            city: 'Champigny',
            state: 'Val de Marne',
            zipCode: 94500,
            department: 'Déléloppement',
        },
        {
            firstName: 'New First Name',
            lastName: 'New Last Name',
            dateOfBirth: '27/10/1978',
            startDate: '1988',
            street: '55 rue Blaise Pierre',
            city: 'Champigny',
            state: 'Val de Marne',
            zipCode: 94500,
            department: 'Déléloppement',
        },

        {
            firstName: 'New First Name',
            lastName: 'New Last Name',
            dateOfBirth: '27/10/1978',
            startDate: '1988',
            street: '55 rue Blaise Pierre',
            city: 'Champigny',
            state: 'Val de Marne',
            zipCode: 94500,
            department: 'Déléloppement',
        },

        {
            firstName: 'New First Name',
            lastName: 'New Last Name',
            dateOfBirth: '27/10/1978',
            startDate: '1988',
            street: '55 rue Blaise Pierre',
            city: 'Champigny',
            state: 'Val de Marne',
            zipCode: 94500,
            department: 'Déléloppement',
        },
    ];

    const filteredData = data.filter(item =>
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

    const handlePerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to first page
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    return (
        <div className={styles.content}>
            <div className={styles.home}>
                <h1 className={styles.h1}>Current Employees</h1>
                <Callout
                    title={"Search info"}
                    type={"info"}
                >
                    <p>🛈 If you want to find an employee from this list or check if a new employee is already registered, you can enter the person's first and last name in the search field.</p>
                </Callout>
                <label className={styles.controls}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={filterText}
                        onChange={e => setFilterText(e.target.value)}
                        className={styles.search}
                    />
                </label>
                <Callout
                    title={"How to sort the list"}
                    type={"info"}
                ><p>🛈 HRnet is an internal web application that manages employee records. On this page, you can view the list of employees, and on the home page, you can handle employee registrations. This page allows you to sort the list by name, date of birth, and city.</p>
                </Callout>
                <div className={styles.controls}>
                    <label className={styles['entrieslabel']}>
                        <h3>Show</h3>
                        <select
                            value={rowsPerPage}
                            onChange={handlePerPageChange}
                        >
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
                            {columns.map((column, index) => (
                                <th key={index} className={styles.tableHeader}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, index) => (
                            <tr key={index} className={styles.tableRow}>
                                {Object.keys(row).map((cell, indexCell) => (
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
                        variant="primary" type="submit"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >Next</Button>
                </div>

                <Link to="/" className={styles.homeLink}>Home</Link>
            </div>
        </div>
    );
}

export default List;
