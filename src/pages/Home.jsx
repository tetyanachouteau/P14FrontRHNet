

import React, { useState } from 'react';
import styles from './Home.module.css';
import { Button, Form } from 'react-bootstrap';
import Modale from '../components/Modale';
import Border from '../components/Border';

function Formulaire({ data }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const saveEmployee = () => {
        // Logique de sauvegarde des employés (à implémenter)
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 3000); // Cache la modal après 3 secondes
    };

    const closeModale = () => {
        setModalVisible(false);
    }

    return (
        <div className={styles.content}>
            <Border/>
            <div className={styles.home}>
                <h2>Create Employee</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="date-of-birth">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="Date of Birth" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="start-date">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="text" placeholder="Start Date" />
                    </Form.Group>
                    <fieldset className={styles.address}>
                        <legend>Address</legend>
                        <Form.Group className="mb-3" controlId="street">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" placeholder="Street" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="zip-code">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="number" placeholder="Zip Code" />
                        </Form.Group>

                    </fieldset>

                    <Form.Group className="mb-3" controlId="department">
                        <Form.Label>Department</Form.Label>
                        <Form.Select aria-label="Department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </Form.Select>
                    </Form.Group>
                    <Button className={styles.button} variant="primary" onClick={saveEmployee}>Create</Button>
                    <Modale show={isModalVisible} onClose={closeModale}>
                        <p>Employee Created!</p>
                    </Modale>
                </Form>
            </div>
        </div>
    );
}

export default Formulaire;
