class EmployeeModel {
    constructor(firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department, id) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.startDate = startDate;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.department = department;
    }
}

// Export de la classe ProfilModel pour pouvoir l'utiliser ailleurs
export default EmployeeModel;