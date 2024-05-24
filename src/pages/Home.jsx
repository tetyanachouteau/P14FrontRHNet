

import React, { useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Formulaire({ data }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const saveEmployee = () => {
        // Logique de sauvegarde des employés (à implémenter)
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 3000); // Cache la modal après 3 secondes
    };

    return (
        <div className={styles.profilContainer}>
            <div className={styles.container}>
                <Link to='./List'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <div action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" />

                    <fieldset className={styles.address}>
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>

                    <button type="button" onClick={saveEmployee}>Save</button>
                    <div className={`${styles.modal} ${isModalVisible ? styles.active : ''}`} id="confirmation">Employee Created!</div>
                </div>
            </div>
        </div>
    );
}

export default Formulaire;
