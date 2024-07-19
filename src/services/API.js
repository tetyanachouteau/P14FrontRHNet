// Importation de la classe EmployeeModel depuis un autre fichier
import EmployeeModel from "./EmployeeModel";

//API.js est un fichier JavaScript qui contient des fonctions 
//pour interagir avec une API (Application Programming Interface). 
//Ces fonctions permettent de communiquer avec un serveur pour 
//récupérer, envoyer, mettre à jour ou supprimer des données.

//Fonctions de l'objet API :

//setEmployees : Ajoute un nouvel employé à la liste des employés.
//Vérifie si un employé avec les mêmes informations existe déjà.
//Si l'employé existe déjà et que isForce est faux, la fonction ne fait rien.
//Sinon, elle crée un nouvel employé et l'ajoute à la liste des employés stockée dans localStorage.

//getEmployees : Récupère la liste des employés depuis localStorage.
//getEmployeeById : Récupère un employé spécifique par son identifiant.
//getEmployeeByValues : Récupère un employé spécifique par ses valeurs (prénom, nom, date de naissance).


//const mockData = true; : Cette variable détermine si 
//des données simulées (mock) sont utilisées à la place 
//des appels API réels.
// Variable pour décider si des données simulées (mock) doivent être utilisées
const mockData = true;

const API = {
    // Fonction pour ajouter un employé
    setEmployees: async (firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department, isForce) => {
        // Utilisation de données simulées ou appel API en fonction de mockData
        if (mockData) {
            // Vérifie si un employé avec les mêmes informations existe déjà
            let employee = await API.getEmployeeByValues(firstName, lastName, dateOfBirth);
            if(employee && !isForce){
                return null; // Si l'employé existe déjà et isForce est faux, ne rien faire
            }
            // Récupère la liste des employés du localStorage
            let employeeList = localStorage.getItem("EmployeeList") ? JSON.parse(localStorage.getItem("EmployeeList")) : [];
            // Crée un nouvel employé
            employee = new EmployeeModel(firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department);
            // Ajoute le nouvel employé à la liste
            employeeList.push(employee);
            // Met à jour la liste des employés dans le localStorage
            localStorage.setItem("EmployeeList", JSON.stringify(employeeList));
            return employee; // Retourne le nouvel employé ajouté
        } else {
            // TODO: Ajoutez ici l'appel API réel si mockData est faux
            return null;
        }
    },

    // Fonction pour récupérer la liste des employés
    getEmployees: async () => {
        // Utilisation de données simulées ou appel API en fonction de mockData
        if (mockData) {
            return localStorage.getItem("EmployeeList") ? JSON.parse(localStorage.getItem("EmployeeList")) : [];
        } else {
            // TODO: Ajoutez ici l'appel API réel si mockData est faux
            return null;
        }
    },

    // Fonction pour récupérer un employé par son identifiant
    getEmployeeById: async (id) => {
        // Utilisation de données simulées ou appel API en fonction de mockData
        if (mockData) {
            let employeeList = localStorage.getItem("EmployeeList") ? JSON.parse(localStorage.getItem("EmployeeList")) : [];
            return employeeList.find(el => el.id === id);
        } else {
            // TODO: Ajoutez ici l'appel API réel si mockData est faux
            return null;
        }
    },

    // Fonction pour récupérer un employé par ses valeurs (prénom, nom, date de naissance)
    getEmployeeByValues: async (firstName, lastName, dateOfBirth) => {
        // Utilisation de données simulées ou appel API en fonction de mockData
        if (mockData) {
            let employeeList = localStorage.getItem("EmployeeList") ? JSON.parse(localStorage.getItem("EmployeeList")) : [];
            return employeeList.find(el => el.firstName === firstName && el.lastName === lastName && el.dateOfBirth === dateOfBirth);
        } else {
            // TODO: Ajoutez ici l'appel API réel si mockData est faux
            return null;
        }
    }
}

// Export de l'objet API pour pouvoir l'utiliser ailleurs dans l'application
export default API;
