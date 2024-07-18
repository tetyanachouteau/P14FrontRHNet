import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import styles from './List.module.css';
import Button from '../components/Button';
import Callout from '../components/Callout';
import API from '../services/API';

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

    const  [filteredData,  setFiltereData] = useState([]);
    const  [totalPages, setTotalPages]  = useState(0);

    useEffect(() => {

        const getEmployees = async function () {
            let data = await API.getEmployees();
            console.log(data);
            setFiltereData(data.filter(item => item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
                item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
                item.startDate.toLowerCase().includes(filterText.toLowerCase()) ||
                item.department.toLowerCase().includes(filterText.toLowerCase()) ||
                item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase()) ||
                item.street.toLowerCase().includes(filterText.toLowerCase()) ||
                item.city.toLowerCase().includes(filterText.toLowerCase()) ||
                item.state.toLowerCase().includes(filterText.toLowerCase()) ||
                item.zipCode.toString().toLowerCase().includes(filterText.toLowerCase())
            ));
            setTotalPages(Math.ceil(data.length / rowsPerPage));
        }
        getEmployees();
    }, [filterText]);

    const handlePerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to first page
    };

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

            </div>
        </div>
    );
}

export default List;
