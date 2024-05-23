// Recherche des données, ajout d'une variable
// En mode date ou api, on sépare les composants et on recherche des données
// Seul axe depuis l'extérieur
import ProfilModel from "./ProfilModel";

//ces importations servent à utiliser des données simulées ou à accéder à des fichiers de données réelles 
//pour les informations principales de l'utilisateur, les activités, les sessions moyennes et les performances dans le reste du code.
// Ces données sont ensuite utilisées dans les différentes fonctions du fichier pour obtenir le profil utilisateur complet.
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from '../data/data';

// Variable pour activer ou désactiver l'utilisation des données de simulation (mockData)§§§§§§
const mockData = false;

// Fonction fléchée pour récupérer les informations de l'utilisateur en fonction de l'ID


//Déclaration de la fonction fléchée asynchrone prenant l'ID en tant que paramètre.
// Initialise une variable infos pour stocker les données de l'utilisateur.
// Utilise la variable mockData pour déterminer si l'on utilise des données simulées ou si l'on effectue une requête API réelle.

//Recherche de données simulées:
//infos = USER_MAIN_DATA.find(el => el.id === Number.parseInt(id));: 
//Si mockData est activé, recherche les données simulées correspondant
// à l'ID dans USER_MAIN_DATA.

//Requête API réelle:
//Sinon, effectue une requête API réelle à l'URL spécifiée (http://localhost:3100/user/ + id) et convertit la réponse en JSON.
//infos = await response.json();: Transforme la réponse en format JSON.
//infos = infos.data;: Extrait les données spécifiques du champ "data" de la réponse.
//return infos;: Retourne les informations de l'utilisateur.

//Cette fonction sert à récupérer les informations de base de l'utilisateur en fonction de son ID, 
//en utilisant soit des données simulées (mockData activé) soit une requête API réelle (mockData désactivé).

const getUserInfos = async (id) => {
    let infos;

    // Utilisation de données simulées ou appel API en fonction de mockData
    if (mockData) {
        // Si mockData est activé, recherche des données simulées dans USER_MAIN_DATA
        infos = USER_MAIN_DATA.find(el => el.id === Number.parseInt(id));
    } else {
        // Si mockData est désactivé, effectue une requête API pour obtenir les données de l'utilisateur
        const response = await fetch('http://localhost:3100/user/' + id);
        
        // Transforme la réponse en format JSON
        infos = await response.json();
        
        // Extrait les données spécifiques du champ "data" de la réponse
        infos = infos.data;
    }

    // Affiche les informations récupérées dans la console (à des fins de débogage)
    console.log("infos: " + JSON.stringify(infos));

    // Retourne les informations de l'utilisateur
    return infos;
};


// Fonction asynchrone pour récupérer les activités de l'utilisateur en fonction de l'ID
async function getActivities(id) {
    let activities;

    // Utilisation de données simulées ou appel API en fonction de mockData
    if (mockData) {
        activities = USER_ACTIVITY.find(el => el.userId === Number.parseInt(id, 10));
    } else {
        const response = await fetch('http://localhost:3100/user/' + id + '/activity');
        activities = await response.json();
        activities = activities.data;
    }

    console.log("activities: " + JSON.stringify(activities));

    return activities;
}

// Fonction asynchrone pour récupérer les sessions moyennes de l'utilisateur en fonction de l'ID
async function getAverageSessions(id) {
    let averageSessions;

    // Utilisation de données simulées ou appel API en fonction de mockData
    if (mockData) {
        averageSessions = USER_AVERAGE_SESSIONS.find(el => el.userId === Number.parseInt(id));
    } else {
        const response = await fetch('http://localhost:3100/user/' + id + '/average-sessions');
        averageSessions = await response.json();
        averageSessions = averageSessions.data;
    }

    console.log("averageSessions: " + JSON.stringify(averageSessions));

    return averageSessions;
}

// Fonction asynchrone pour récupérer les performances de l'utilisateur en fonction de l'ID
async function getPerfomances(id) {
    let perfomances;

    // Utilisation de données simulées ou appel API en fonction de mockData
    if (mockData) {
        perfomances = USER_PERFORMANCE.find(el => el.userId === Number.parseInt(id));
    } else {
        const response = await fetch('http://localhost:3100/user/' + id + '/performance');
        perfomances = await response.json();
        perfomances = perfomances.data;
    }

    console.log("perfomances: " + JSON.stringify(perfomances));

    return perfomances;
}

// Fonction asynchrone principale pour récupérer le profil complet de l'utilisateur en fonction de l'ID
async function getProfil(id) {
    // Recherche des informations de base de l'utilisateur
    const infos = await getUserInfos(id);

    // Recherche des activités de l'utilisateur
    const activities = await getActivities(id);

    // Recherche des sessions moyennes de l'utilisateur
    const averageSessions = await getAverageSessions(id);

    // Recherche des performances de l'utilisateur
    const perfomances = await getPerfomances(id);

    // Retourne un nouvel objet ProfilModel en utilisant les données récupérées
    return new ProfilModel(infos, activities.sessions, averageSessions.sessions, perfomances);
}

// Export de la fonction getProfil pour pouvoir l'utiliser ailleurs
export default getProfil;




//Ce bloc d'importation comprend l'importation de données 
//simulées ou de fichiers de données réelles provenant de l'emplacement ../data/data. 

//USER_MAIN_DATA semble être un ensemble de données simulées ou statiques représentant les informations principales de l'utilisateur.

//USER_ACTIVITY représente un ensemble de données simulées ou statiques contenant des informations sur les activités de l'utilisateur.

//USER_AVERAGE_SESSIONS semble être un ensemble de données simulées ou statiques contenant des informations sur les sessions moyennes de l'utilisateur.

//USER_PERFORMANCE représente un ensemble de données simulées ou statiques contenant des informations sur les performances de l'utilisateur.

//ces importations servent à utiliser des données simulées ou à accéder à des fichiers de données réelles
// pour les informations principales de l'utilisateur, les activités, les sessions moyennes et les performances dans le reste du code. 
//Ces données sont ensuite utilisées dans les différentes fonctions du fichier pour obtenir le profil utilisateur complet.






