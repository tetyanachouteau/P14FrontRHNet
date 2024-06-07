import React, { useState } from 'react';
import styles from './Home.module.css';
import Modal from '../components/Modal';
import Border from '../components/Border';
import Input from '../components/Input';
import Select from '../components/Select';
import GroupInput from '../components/GroupInput';
import Button from '../components/Button';

function Formulaire({ data }) {
    // State for modal visibility
    const [isModalVisible, setModalVisible] = useState(false);

    // State for first name and its error message
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const onChangeFirstName = (event) => {
        const value = event.target.value;
        setFirstName(value);
        setFirstNameError("");
    }

    // State for last name and its error message
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const onChangeLastName = (event) => {
        const value = event.target.value;
        setLastName(value);
        setLastNameError("");
    }

    // State for date of birth and its error message
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [dateOfBirthError, setDateOfBirthError] = useState("");
    const onChangeDateOfBirth = (event) => {
        const value = event.target.value;
        setDateOfBirth(value);
        setDateOfBirthError("");
    }

    // State for start date and its error message
    const [startDate, setStartDate] = useState("");
    const [startDateError, setStartDateError] = useState("");
    const onChangeStartDate = (event) => {
        const value = event.target.value;
        setStartDate(value);
        setStartDateError("");
    }

    // State for street name and its error message
    const [streetName, setStreetName] = useState("");
    const [streetNameError, setStreetNameError] = useState("");
    const onChangeStreetName = (event) => {
        const value = event.target.value;
        setStreetName(value);
        setStreetNameError("");
    }

    // State for city name and its error message
    const [cityName, setCityName] = useState("");
    const [cityNameError, setCityNameError] = useState("");
    const onChangeCityName = (event) => {
        const value = event.target.value;
        setCityName(value);
        setCityNameError("");
    }

    // State for state name and its error message
    const [stateName, setStateName] = useState("");
    const [stateNameError, setStateNameError] = useState("");
    const onChangeStateName = (event) => {
        const value = event.target.value;
        setStateName(value);
        setStateNameError("");
    }

    // State for zip code and its error message
    const [zipCode, setZipCode] = useState("");
    const [zipCodeError, setZipCodeError] = useState("");
    const onChangeZipCode = (event) => {
        const value = event.target.value;
        setZipCode(value);
        setZipCodeError("");
    }

    // State for department and its error message
    const [department, setDepartment] = useState("");
    const [departmentError, setDepartmentError] = useState("");
    const onChangeDepartment = (event) => {
        const value = event.target.value;
        setDepartment(value);
        setDepartmentError("");
    }

    // Function to save employee details
    const saveEmployee = () => {
        // Validate first name
        if (!firstName) {
            setFirstNameError("First name is mandatory");
            return;
        }

        // Validate last name
        if (!lastName) {
            setLastNameError("Last name is mandatory");
            return;
        }

        // Validate date of birth
        if (!dateOfBirth) {
            setDateOfBirthError("Date of birth is mandatory");
            return;
        }
        if (new Date(dateOfBirth) > new Date()) {
            setDateOfBirthError("Date of birth should be before today");
            return;
        }

        // Validate start date
        if (!startDate) {
            setStartDateError("Start date is mandatory");
            return;
        }

        // Validate street name
        if (!streetName) {
            setStreetNameError("Street name is mandatory");
            return;
        }

        // Validate city name
        if (!cityName) {
            setCityNameError("City name is mandatory");
            return;
        }

        // Validate state name
        if (!stateName) {
            setStateNameError("State name is mandatory");
            return;
        }

        // Validate zip code
        if (!zipCode) {
            setZipCodeError("Zip code is mandatory");
            return;
        }

        // Validate department
        if (!department) {
            setDepartmentError("Department code is mandatory");
            return;
        }

        // Logic to save the employee (to be implemented)
        setModalVisible(true);

        // Reset form fields after saving
        setFirstName("");
        setLastName("");
        setDateOfBirth("");
        setStartDate("");
        setStreetName("");
        setCityName("");
        setStateName("");
        setZipCode("");
        setDepartment("");

        // Hide the modal after 3 seconds
        setTimeout(() => {
            setModalVisible(false);
        }, 3000);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalVisible(false);
    };

    // Custom configuration for the modal
    const customConfig = {
        buttons: [
            {
                label: 'OK',
                className: styles.button,
                action: closeModal
            },
            // Uncomment and configure additional buttons if needed
            // {
            //     label: 'Cancel',
            //     className: styles.button,
            //     action: closeModal
            // }
        ],
        // Add additional modal configuration options if needed
        // title: "Information",
        // showCloseIcon: true,
        onCloseIcon: closeModal
    };

    return (
        <div className={styles.content}>
            {/* Border component for visual styling */}
            <Border />
            <div className={styles.home}>
                <h2 className={styles.h2}>Create Employee</h2>
                <form className={styles.form}>
                    {/* Input fields for employee details */}
                    <Input controlId="first-name" label="First Name" type="text" placeholder="First Name" onChange={onChangeFirstName} hasError={firstNameError} value={firstName} />
                    <Input controlId="last-name" label="Last Name" type="text" placeholder="Last Name" onChange={onChangeLastName} hasError={lastNameError} value={lastName} />
                    <Input controlId="date-of-birth" label="Date of Birth" type="date" placeholder="Date of Birth" onChange={onChangeDateOfBirth} hasError={dateOfBirthError} value={dateOfBirth} />
                    <Input controlId="start-date" label="Start Date" type="date" placeholder="Start Date" onChange={onChangeStartDate} hasError={startDateError} value={startDate} />
                    {/* Group input for address details */}
                    <GroupInput title="Address" className={styles.address}>
                        <Input controlId="street" label="Street" type="text" placeholder="Street" onChange={onChangeStreetName} hasError={streetNameError} value={streetName} />
                        <Input controlId="city" label="City" type="text" placeholder="City" onChange={onChangeCityName} hasError={cityNameError} value={cityName} />
                        <Input controlId="state" label="State" type="text" placeholder="State" onChange={onChangeStateName} hasError={stateNameError} value={stateName} />
                        <Input controlId="zip-code" label="Zip Code" type="number" placeholder="Zip Code" onChange={onChangeZipCode} hasError={zipCodeError} value={zipCode} />
                    </GroupInput>
                    {/* Select input for department */}
                    <Select controlId="department" label="Department" onChange={onChangeDepartment} hasError={departmentError} value={department}>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </Select>
                    {/* Button to save employee details */}
                    <Button className={styles.button} variant="primary" onClick={saveEmployee}>Create</Button>
                    {/* Modal to show confirmation */}
                    <Modal show={isModalVisible} config={customConfig}>
                        <p>Employee Created!</p>
                    </Modal>
                </form>
            </div>
        </div>
    );
}

export default Formulaire;

// To customize: change colors, add close icon, etc.
// Consider creating a package for reusable components
