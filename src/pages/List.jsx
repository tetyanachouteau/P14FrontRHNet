import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './List.module.css';

function List() {
    const [filterText, setFilterText] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    //const [stateRow, setStateRow] = useState(new Array());

    const columns = [
        'First Name',
        'Last Name',
        'Start Date',
        'Department',
        'Date of Birth',
        'Street',
        'City',
        'State',
        'Zip Code'
    ];

    const data = [
        {
            firstName: 'Tetyana',
            lastName: 'Chouteau',
            startDate: '1988',
            department: 'Dev',
            dateOfBirth: '27/10/1978',
            street: '55 rue Blaise Pierre',
            city: 'Argenteuil',
            state: 'Val-d\'Oise',
            zipCode: 95100,
        },
        {
            firstName: 'd',
            lastName: '',
            startDate: '',
            department: 'Sales',
            dateOfBirth: '',
            street: '',
            city: 'VI',
            state: '',
            zipCode: '',
        },
        {
            firstName: 'd',
            lastName: '',
            startDate: '',
            department: 'Sales',
            dateOfBirth: '',
            street: '',
            city: 'VI',
            state: '',
            zipCode: '',
        },
        {
            firstName: '',
            lastName: '',
            startDate: '',
            department: 'Sales',
            dateOfBirth: '',
            street: '',
            city: 'AL',
            state: '',
            zipCode: '',
        },
        {
            firstName: '',
            lastName: '',
            startDate: '',
            department: 'Sales',
            dateOfBirth: '',
            street: '',
            city: 'AL',
            state: '',
            zipCode: '',
        }
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
        <div className={styles.home}>
            <h1 className={styles.title}>Current Employees</h1>
            <div className={`${styles.controls} ${styles.flex}`}>
                <label>
                    Show
                    <select 
                        value={rowsPerPage} 
                        onChange={handlePerPageChange}
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    entries
                </label>
                <label className={styles.label}>
                    Search
                    <input 
                        type="text" 
                        placeholder="Search1" 
                        value={filterText} 
                        onChange={e => setFilterText(e.target.value)}
                        className={styles.search}
                    />
                </label>
            </div>
            <table className={`${styles.dataTable} ${styles.redText}`}>
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
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
            <Link to="/" className={styles.homeLink}>Home</Link>
        </div>
    );
}

export default List;
