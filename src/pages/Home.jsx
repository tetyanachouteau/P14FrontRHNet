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
    let hasError = false;

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
    const [departmentError, setDepartmentError] = useState("Sales");
    const onChangeDepartment = (event) => {
        const value = event.target.value;
        console.log(value)
        setDepartment(value);
        setDepartmentError("");
    }

    // Function to save employee details
    //return s'arrete tour de tout et puis onclick etc
    const saveEmployee = (event) => {
        //stop la gestion du form c'est js qui va le gerer pour sortir
        event.preventDefault();
        hasError = false;

        firstName && setFirstName(firstName[0].toUpperCase() + firstName.slice(1))

        // Validate first name
        if (!firstName) {
            setFirstNameError("First name is mandatory");
            hasError = true;
        }

        if (firstName.length < 3) {
            setFirstNameError("First name is too short");
            hasError = true;
        }

        // Validate last name
        if (!lastName) {
            setLastNameError("Last name is mandatory");
            hasError = true;
        }

        lastName && setLastName(lastName[0].toUpperCase() + lastName.slice(1))

        if (lastName.length < 3) {
            setFirstNameError("Last name is too short");
            hasError = true;
        }

        // Validate date of birth
        if (!dateOfBirth) {
            setDateOfBirthError("Date of birth is mandatory");
            hasError = true;
        }

        if (new Date(dateOfBirth) > new Date()) {
            setDateOfBirthError("Date of birth should be before today");
            hasError = true;
        }

        // Validate start date
        if (!startDate) {
            setStartDateError("Start date is mandatory");
            hasError = true;
        }

        // Validate street name
        if (!streetName) {
            setStreetNameError("Street name is mandatory");
            hasError = true;
        }

        if (streetName.length < 3) {
            setStreetNameError("Street name is too short");
            hasError = true;
        }

        // Validate city name
        if (!cityName) {
            setCityNameError("City name is mandatory");
            hasError = true;
        }

        if (cityName.length < 3) {
            setCityNameError("City name is too short");
            hasError = true;
        }

        // Validate state name
        if (!stateName) {
            setStateNameError("State name is mandatory");
            hasError = true;
        }

        // Validate zip code
        if (!zipCode) {
            setZipCodeError("Zip code is mandatory");
            hasError = true;
        }

        if (!zipCode.match(/^\d{5}$/)) {
            setZipCodeError("Zip code is not in a good format");
            hasError = true;
        }

        // Validate department
        if (!department) {
            setDepartmentError("Department code is mandatory");
            hasError = true;
        }
        // intation
        if (hasError) {
            console.log('error');
            return;
        }
        console.log('valide');
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
        setDepartment("Sales");

        // Hide the modal after 3 seconds
        //setTimeout(() => {
        //  setModalVisible(false);
        //});
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
                title: 'OK',
                className: styles.button,
                action: closeModal,
                showCloseIcon: true
            },
            // Uncomment and configure additional buttons if needed
            {
                label: 'Cancel',
                title: 'Cancel',
                className: styles.button,
                action: closeModal,
                showCloseIcon: true
            }
        ],
        onCloseIcon: closeModal
    };


    return (
        <div className={styles.content}>
            {/* Border component for visual styling */}
            <Border />
            <div className={styles.home}>
                <h2 className={styles.h2}>Create Employee</h2>
                <form className={styles.form} onSubmit={saveEmployee}>
                    {/* Input fields for employee details onChangeFirstName undell*/}
                    <Input controlId="first-name" label="First Name" type="text" placeholder="First Name" onChange={onChangeFirstName} hasError={firstNameError} value={firstName} />
                    <Input controlId="last-name" label="Last Name" type="text" placeholder="Last Name" onChange={onChangeLastName} hasError={lastNameError} value={lastName} />
                    <Input controlId="date-of-birth" label="Date of Birth" type="date" placeholder="Date of Birth" onChange={onChangeDateOfBirth} hasError={dateOfBirthError} value={dateOfBirth} />
                    <Input controlId="start-date" label="Start Date" type="date" placeholder="Start Date" onChange={onChangeStartDate} hasError={startDateError} value={startDate} />
                    {/* Group input for address details */}
                    <GroupInput title="Address" className={styles.address}>
                        <Input controlId="street" label="Street" type="text" placeholder="Street" onChange={onChangeStreetName} hasError={streetNameError} value={streetName} />
                        <Input controlId="city" label="City" type="text" placeholder="City" onChange={onChangeCityName} hasError={cityNameError} value={cityName} />
                        <Select controlId="state" label="State" onChange={onChangeStateName} hasError={stateNameError} value={stateName}>
                            <option value="">Select a state</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AS">American Samoa</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FM">Federated States Of Micronesia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="GU">Guam</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PW">Palau</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VI">Virgin Islands</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </Select>
                        <Input controlId="zip-code" label="Zip Code" type="text" placeholder="Zip Code" onChange={onChangeZipCode} hasError={zipCodeError} value={zipCode} />
                    </GroupInput>
                    {/* Select input for department */}
                    <Select controlId="department" label="Department" onChange={onChangeDepartment} hasError={departmentError} value={department}>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </Select>
                    {/* Button to save employee details button type submit qui va appeler la fonction, action de navigateur et sinon*/}
                    <Button className={styles.button} variant="primary" type="submit">Create</Button>
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
