// Modèle de profil représentant les données du profil utilisateur
//Donne le rôle de chaque propriété et la manière dont elles sont initialisées 
//dans le constructeur de la classe ProfilModel.
class ProfilModel {
    // Constructeur prenant des informations générales, activités, sessions moyennes et performances
    constructor(infos, activities, averageSessions, perfomances) {
        // Assignation des propriétés du profil en fonction des données fournies
        this.id = infos.id; // ID du profil
        this.firstName = infos.userInfos.firstName; // Prénom du profil
        this.lastName = infos.userInfos.lastName; // Nom de famille du profil
        this.age = infos.userInfos.age; // Âge du profil

        // Vérification si todayScore existe, sinon utiliser le score
        //this.score = infos.todayScore !== undefined ? infos.todayScore : infos.score;
        this.score = infos.todayScore ?? infos.score;
        this.calorie = infos.keyData.calorieCount; // Compte calorique du profil
        this.proteine = infos.keyData.proteinCount; // Compte de protéines du profil
        this.glucide = infos.keyData.carbohydrateCount; // Compte de glucides du profil
        this.lipide = infos.keyData.lipidCount; // Compte de lipides du profil
        this.activities = activities; // Données d'activités du profil
        this.averageSessions = averageSessions; // Sessions moyennes du profil
        this.perfomances = perfomances; // Performances du profil
    }
}

// Export de la classe ProfilModel pour pouvoir l'utiliser ailleurs
export default ProfilModel;