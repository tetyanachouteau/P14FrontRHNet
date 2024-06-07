

import React, { useState } from 'react';
import styles from './Home.module.css';
import Modal from '../components/Modal';
import Border from '../components/Border';
import Input from '../components/Input';
import Select from '../components/Select';
import GroupInput from '../components/GroupInput';
import Button from '../components/Button';

function Formulaire({ data }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const onChangeFirstName = (event) => {
        const value = event.target.value;
        setFirstName(value);
        setFirstNameError("");
    }

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const onChangeLastName = (event) => {
        const value = event.target.value;
        setLastName(value);
        setLastNameError("");
    }

    const [dateOfBirth, setDateOfBirth] = useState("");
    const [dateOfBirthError, setDateOfBirthError] = useState("");
    const onChangeDateOfBirth = (event) => {
        const value = event.target.value;
        setDateOfBirth(value);
        setDateOfBirthError("");
    }

    const [startDate, setStartDate] = useState("");
    const [startDateError, setStartDateError] = useState("");
    const onChangeStartDate = (event) => {
        const value = event.target.value;
        setStartDate(value);
        setStartDateError("");
    }

    // const [firstName, setFirstName] = useState();
    // const [firstNameError, setFirstNameError] = useState();
    // const [firstName, setFirstName] = useState();
    // const [firstNameError, setFirstNameError] = useState();
    // const [firstName, setFirstName] = useState();
    // const [firstNameError, setFirstNameError] = useState();
    // const [firstName, setFirstName] = useState();
    // const [firstNameError, setFirstNameError] = useState();
    // const [firstName, setFirstName] = useState();
    // const [firstNameError, setFirstNameError] = useState();


    const saveEmployee = () => {
        if (!firstName) {
            setFirstNameError("First name is mandatory")
            return;
        }
        if (!lastName) {
            setLastNameError("Last name is mandatory")
            return;
        }
        if (!dateOfBirth){
            setDateOfBirthError("Date of birth is mandatory")
            return;
        }
        console.log(dateOfBirth)
        if (new Date(dateOfBirth) > new Date()){
            setDateOfBirthError("Date of birth should be before today")
            return;
        }
        if (!startDate){
            setStartDateError("Start date is mandatory")
            return;
        }

        // Logique de sauvegarde des employés (à implémenter)
        setModalVisible(true);
        setFirstName("");
        setLastName("");
        setDateOfBirth("");
        setStartDate("");
        setTimeout(() => {
            setModalVisible(false);
        }, 3000); // Cache la modal après 3 secondes
    };

    const closeModal = () => {
        setModalVisible(false);
    }
    //esxemple: X ferme modal
    //comment je fais json de config pour qu'il soit bien simple facile et perment de configuer facillement, doc , packege
    const customConfig = {
        buttons: [
            {
                label: 'OK',
                className: styles.button,
                action: closeModal
            },
            // {
            //     label: 'Cancel',
            //     className: styles.button,
            //     action: closeModal
            // }
        ],
        //title: "Information",
        //showCloseIcon: true,
        onCloseIcon: closeModal
    }

    return (
        <div className={styles.content}>
            <Border />
            <div className={styles.home}>
                <h2 className={styles.h2}>Create Employee</h2>
                <form className={styles.form}>
                    <Input controlId="first-name" label="First Name" type="text" placeholder="First Name" onChange={onChangeFirstName} hasError={firstNameError} value={firstName} />
                    <Input controlId="last-name" label="Last Name" type="text" placeholder="Last Name" onChange={onChangeLastName} hasError={lastNameError} value={lastName} />
                    <Input controlId="date-of-birth" label="Date of Birth" type="date" placeholder="Date of Birth" onChange={onChangeDateOfBirth} hasError={dateOfBirthError} value={dateOfBirth}  />
                    <Input controlId="start-date" label="Start Date" type="date" placeholder="Start Date" onChange={onChangeStartDate} hasError={startDateError} value={startDate} />
                    <GroupInput title="Address" className={styles.address}>
                        <Input controlId="street" label="Street" type="text" placeholder="Street" />
                        <Input controlId="city" label="City" type="text" placeholder="City" />
                        <Input controlId="state" label="State" type="text" placeholder="State" />
                        <Input controlId="zip-code" label="Zip Code" type="number" placeholder="Zip Code" />
                    </GroupInput>
                    <Select controlId="department" label="Department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </Select>
                    <Button className={styles.button} variant="primary" onClick={saveEmployee}>Create</Button>
                    <Modal show={isModalVisible} config={customConfig}>
                        <p>Employee Created!</p>
                    </Modal>
                </form>
            </div>
        </div>
    );
}

export default Formulaire;

//customiser: adapter, tout changer, couleur.. et ? icone de fermeture ou pas?
//composant package avec plus tard
