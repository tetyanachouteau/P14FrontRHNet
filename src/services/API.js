import EmployeeModel from "./EmployeeModel";

const mockData = true;

const API = {
    setEmployees: async (firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department, isForce) => {
        // Utilisation de données simulées ou appel API en fonction de mockData
        if (mockData) {
            let employee = await API.getEmployeeByValues(firstName, lastName, dateOfBirth);
            if(employee && !isForce){
                return null;
            }
            let employeeList = localStorage.getItem("EmployeeList") ? JSON.parse(localStorage.getItem("EmployeeList")) : [];
            employee = new EmployeeModel(firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department);
            employeeList.push(employee)
            localStorage.setItem("EmployeeList",JSON.stringify(employeeList));
            return employee;
        } else {
            // TODO
            return null
        }
    },
    getEmployees: async () => {
        // Utilisation de données simulées ou appel API en fonction de mockData
        if (mockData) {
            return localStorage.getItem("EmployeeList") ? JSON.parse(localStorage.getItem("EmployeeList")) : [];
        } else {
            // TODO 
            return null;
        }
    },
    getEmployeeById: async (id) => {
        // Utilisation de données simulées ou appel API en fonction de mockData
        if (mockData) {
            let employeeList = localStorage.getItem("EmployeeList") ? JSON.parse(localStorage.getItem("EmployeeList")) : [];
            return employeeList.find(el => el.id === id)
        } else {
            // TODO 
            return null;
        }
    },
    getEmployeeByValues: async (firstName, lastName, dateOfBirth) => {
        // Utilisation de données simulées ou appel API en fonction de mockData
        if (mockData) {
            let employeeList = localStorage.getItem("EmployeeList") ? JSON.parse(localStorage.getItem("EmployeeList")) : [];
            return employeeList.find(el => el.firstName === firstName && el.lastName === lastName && el.dateOfBirth === dateOfBirth)
        } else {
            // TODO 
            return null;
        }
    }
}

// Export de la fonction getProfil pour pouvoir l'utiliser ailleurs
export default API;