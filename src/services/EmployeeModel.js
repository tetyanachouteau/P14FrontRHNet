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


//Une classe est un modèle ou un plan pour créer des objets 
//spécifiques. Elle encapsule des données et des fonctions qui opèrent sur ces données.
//
//Le constructeur est une méthode spéciale pour créer et initialiser un objet créé avec une classe. En JavaScript, une méthode de constructeur est définie en utilisant le mot-clé constructor.
//Les paramètres du constructeur (firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department, id) 
//sont utilisés pour initialiser les propriétés de l'employé.

//this.id = id; : Assigne la valeur du paramètre id à la propriété id de l'objet.