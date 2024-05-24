import React from 'react';
import styles from "./formulaire.module.css";

function Formulaire({ data }) {
    // Extraction des données de la propriété "data"
    //const { name, id } = data;

    return (
        <div className={styles.profilContainer}>
            <h1>Formulaire</h1>
            <div class="container">
                <a >View Current Employees</a>
                <h2>Create Employee</h2>
                <div action="#" id="create-employee">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label for="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />

                    <label for="start-date">Start Date</label>
                    <input id="start-date" type="text" />

                    <fieldset class="address">
                        <legend>Address</legend>

                        <label for="street">Street</label>
                        <input id="street" type="text" />

                        <label for="city">City</label>
                        <input id="city" type="text" />

                        <label for="state">State</label>
                        <select name="state" id="state"></select>

                        <label for="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label for="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>

                    <button onclick="saveEmployee()">Save</button>
                    <div id="confirmation" class="modal">Employee Created!</div>
                </div>
            </div>
        </div>
    )
}
export default Formulaire;
