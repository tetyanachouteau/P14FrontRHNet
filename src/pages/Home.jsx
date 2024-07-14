
import React, { useState } from 'react';
import { parseISO, addYears, subYears } from 'date-fns';
import styles from './Home.module.css';
import Modal from '../components/Modal';
import ModalNew from '../components/Modal';
import bouquet from '../assets/images/bouquet.png';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Callout from '../components/Callout'

function Formulaire({ data }) {
    const navigate = useNavigate(); // Hook for navigation

    const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility
    let hasError = false; // Variable to track form errors

    const [isModalNewVisible, setModalNewVisible] = useState(false); // State for modal visibility


    // State and event handlers for form inputs
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

    const [streetName, setStreetName] = useState("");
    const [streetNameError, setStreetNameError] = useState("");
    const onChangeStreetName = (event) => {
        const value = event.target.value;
        setStreetName(value);
        setStreetNameError("");
    }

    const [cityName, setCityName] = useState("");
    const [cityNameError, setCityNameError] = useState("");
    const onChangeCityName = (event) => {
        const value = event.target.value;
        setCityName(value);
        setCityNameError("");
    }

    const [stateName, setStateName] = useState("Select a state");
    const [stateNameError, setStateNameError] = useState("");
    const onChangeStateName = (event) => {
        const value = event.target.value;
        setStateName(value);
        setStateNameError("");
    }

    const [zipCode, setZipCode] = useState("");
    const [zipCodeError, setZipCodeError] = useState("");
    const onChangeZipCode = (event) => {
        const value = event.target.value;
        setZipCode(value);
        setZipCodeError("");
    }

    const [department, setDepartment] = useState("Select a departement");
    const [departmentError, setDepartmentError] = useState("");
    const onChangeDepartment = (event) => {
        const value = event.target.value;
        setDepartment(value);
        setDepartmentError("");
    }

    // Function to validate and save employee data
    const saveEmployee = (event) => {
        event.preventDefault();
        hasError = false;
        // Regular expressions and constants for validation
        const nameRegex = /^[a-zA-Z\s]+$/;
        const zipCodeRegex = /^\d{5}$/;
        const maxHumanAge = 120;
        const minAge = 18;
        const currentDate = new Date();
        const dateOfBirthDate = dateOfBirth ? parseISO(dateOfBirth) : null;
        const startDateDate = startDate ? parseISO(startDate) : null;
        // Capitalize first name and validate
        firstName && setFirstName(firstName[0].toUpperCase() + firstName.slice(1));
        if (!firstName) {
            setFirstNameError("First name is mandatory");
            hasError = true;
        } else if (firstName.length < 3) {
            setFirstNameError("First name is too short");
            hasError = true;
        } else if (!nameRegex.test(firstName)) {
            setFirstNameError("First name should not contain numbers or special characters");
            hasError = true;
        }

        lastName && setLastName(lastName[0].toUpperCase() + lastName.slice(1));
        if (!lastName) {
            setLastNameError("Last name is mandatory");
            hasError = true;
        } else if (lastName.length < 3) {
            setLastNameError("Last name is too short");
            hasError = true;
        } else if (!nameRegex.test(lastName)) {
            setLastNameError("Last name should not contain numbers or special characters");
            hasError = true;
        }

        if (!dateOfBirth) {
            setDateOfBirthError("Date of birth is mandatory");
            hasError = true;
        } else if (dateOfBirthDate > currentDate) {
            setDateOfBirthError("Date of birth should be before today");
            hasError = true;
        } else if (currentDate.getFullYear() - dateOfBirthDate.getFullYear() > maxHumanAge) {
            setDateOfBirthError("Date of birth should be within a valid human age");
            hasError = true;
        } else if (currentDate.getFullYear() - dateOfBirthDate.getFullYear() < minAge) {
            setDateOfBirthError("You must be at least 18 years old");
            hasError = true;
        }

        const oneYearBeforeToday = subYears(currentDate, 1);
        const oneYearAfterToday = addYears(currentDate, 1);

        if (!startDate) {
            setStartDateError("Start date is mandatory");
            hasError = true;
        } else if (startDateDate > oneYearAfterToday) {
            setStartDateError("Start date should not be more than one year in the future");
            hasError = true;
        } else if (startDateDate < oneYearBeforeToday) {
            setStartDateError("Start date should not be more than one year in the past");
            hasError = true;
        } else if (dateOfBirthDate && startDateDate < dateOfBirthDate) {
            setStartDateError("Start date should not be before date of birth");
            hasError = true;
        }

        if (!streetName) {
            setStreetNameError("Street name is mandatory");
            hasError = true;
        } else if (streetName.length < 3) {
            setStreetNameError("Street name is too short");
            hasError = true;
        } else if (!nameRegex.test(streetName)) {
            setStreetNameError("Street name should not contain numbers or special characters");
            hasError = true;
        }

        if (!cityName) {
            setCityNameError("City name is mandatory");
            hasError = true;
        } else if (cityName.length < 3) {
            setCityNameError("City name is too short");
            hasError = true;
        } else if (!nameRegex.test(cityName)) {
            setCityNameError("City name should not contain numbers or special characters");
            hasError = true;
        }

        if (stateName === "Select a state") {
            setStateNameError("State name is mandatory");
            hasError = true;
        }

        if (!zipCode) {
            setZipCodeError("Zip code is mandatory");
            hasError = true;
        } else if (!zipCodeRegex.test(zipCode)) {
            setZipCodeError("Zip code must be without letters");
            hasError = true;
        } else if (zipCode.length !== 5) {
            setZipCodeError("Zip code should be exactly 5 digits, without any signs or letters");
            hasError = true;
        }

        if (department === "Select a departement") {
            setDepartmentError("Department code is mandatory");
            hasError = true;
        }

        // If there are errors, log them and return
        if (hasError) {
            return;
        }

        // API to save employee
        // simule error duplicate employee
        console.log(dateOfBirth);
        if (lastName === "Chouteau" && firstName === "Tetyana" && dateOfBirth === "1978-10-27") {

            setModalNewVisible(true);
            return;
        }


        // If no errors, show modal, reset fields, and perform additional actions
        setModalVisible(true);
        resetForm();
    };

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setDateOfBirth("");
        setStartDate("");
        setStreetName("");
        setCityName("");
        setStateName("Select a state");
        setZipCode("");
        setDepartment("Select a departement");
    }

    const closeModal = () => {
        setModalVisible(false);
    };

    const closeModalNew = () => {
        setModalNewVisible(false);
        // Recall API to confirm save
        setModalVisible(true);
        resetForm();
    };

    const cancelModalNew = () => {
        setModalNewVisible(false);
        resetForm();
    }


    // Function to navigate to the list page
    const goList = () => {
        navigate("List");
    };

    // Custom configuration for the modal

    const customConfig = {
        buttons: [
            {
                label: 'Home',
                className: styles.buttonPurple, // Purple button style from CSS module
                action: closeModal // Action to close modal
            },
            {
                label: 'List-employees',
                className: styles.buttonGreen,
                action: goList
            }
        ],
        title: "Confirmation",
        onCloseIcon: closeModal
    };

    const customConfigNew = {
        buttons: [
            {
                label: 'Yes',
                className: styles.buttonGreen, // Purple button style from CSS module
                action: closeModalNew // Action to close modal
            },
            {
                label: 'No',
                className: styles.buttonPurple,
                action: cancelModalNew
            }
        ],
        title: "Request for additional validation",
        onCloseIcon: closeModalNew
    };

    return (
        <div className={styles.content} style={{ backgroundImage: `url(${bouquet})` }}>
            <div className={styles.home}>
                <h1 className={styles.h1}>Create Employee</h1>
                <form className={styles.form} onSubmit={saveEmployee}>
                    <Input controlId="first-name" label="First Name" type="text" placeholder="First Name" onChange={onChangeFirstName} hasError={firstNameError} value={firstName} />
                    <Input controlId="last-name" label="Last Name" type="text" placeholder="Last Name" onChange={onChangeLastName} hasError={lastNameError} value={lastName} />
                    <Callout
                        title={"Help"}
                        type={"info"}
                    >
                        <p>🛈 Entering Dates: The date of birth must be before the current date.
                            The date of birth must correspond to a valid human age.
                            The age must be between 18 and 120 years old.</p>
                        <p>The start date must not be more than one year in the future from the current date.
                            The start date must not be more than one year in the past from the current date.
                            The start date must not be earlier than the date of birth.</p>
                    </Callout>

                    <Input controlId="date-of-birth" label="Date of Birth" type="date" placeholder="Date of Birth" onChange={onChangeDateOfBirth} hasError={dateOfBirthError} value={dateOfBirth} />
                    <Input controlId="start-date" label="Start Date" type="date" placeholder="Start Date" onChange={onChangeStartDate} hasError={startDateError} value={startDate} />
                    {/* Group input for address details */}

                    <Input controlId="street" label="Street" type="text" placeholder="Street" onChange={onChangeStreetName} hasError={streetNameError} value={streetName} />
                    <Input controlId="city" label="City" type="text" placeholder="City" onChange={onChangeCityName} hasError={cityNameError} value={cityName} />
                    <Select className={styles.options} controlId="state" label="State" onChange={onChangeStateName} hasError={stateNameError} value={stateName}>
                        <option value="Select a state">Select a state</option>
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

                    {/* Select input for department */}
                    <Select controlId="department" label="Department" onChange={onChangeDepartment} hasError={departmentError} value={department}>
                        <option value="Select a departement">Select a departement</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                        <option>Marketing</option>
                        <option>Sales</option>
                    </Select>
                    <Callout
                            title={"Validation of employees"}
                            type={"about"}
                        >
                            <p>🛈 &#9752; Request for additional validation, next step. HRnet - Wealth Health will inform you if employees database can already contains plausible data for the person currently creating.</p>
                            <p>This have includes the same first name, last name, and date of birth.</p>
                           </Callout>
                    {/* Button to save employee details button type submit qui va appeler la fonction, action de navigateur et sinon*/}
                    <Button className={styles.buttonGreen} variant="primary" type="submit">Create</Button>
                    {/* Modal to show confirmation */}
                    <Modal show={isModalVisible} config={customConfig}>
                        <h1>Employee Created</h1>

                        <Callout
                            title={"Success"}
                            type={"success"}
                        >

                            <p> 💫 Validation: The task of validating the form has been successfully completed.</p>
                            <p>All required fields have been correctly validated according to the specified criteria.</p>
                        </Callout>
                    </Modal>
                    <ModalNew show={isModalNewVisible} config={customConfigNew}>

                        <Callout
                            title={"HRnet - Wealth Health employees database "}
                            type={"about"}
                        >
                            <p>🛈 &#9752; We inform you that employees database already contains plausible data for the person currently creating.</p>
                            <p>This includes the same first name, last name, and date of birth. The employee in question is:</p>
                            <table>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Date of Birth</th>
                                </tr>
                                <tr>
                                    <td>Tetyana</td>
                                    <td>Chouteau</td>
                                    <td>10/27/1978</td>
                                </tr>
                            </table>
                            <p>If this is not the same person, according to additional criteria, you are free to proceed.</p>
                            
                        </Callout>
                        <h1>Continue to create a new employee?</h1>
                    </ModalNew>
                </form>

            </div>

        </div>

    );
}

export default Formulaire;

// To customize: change colors, add close icon, etc.
// Consider creating a package for reusable components
