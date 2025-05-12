// utils.js

// Fonction pour ajouter un élément à une liste
function addToList(list, item) {
    list.push(item);
    return list;
}

// Fonction pour vérifier si un élément est dans la liste
function isInList(list, item) {
    return list.includes(item);
}

// Fonction pour formater une date en format 'dd-mm-yyyy'
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Janvier est 0
    let year = date.getFullYear();

    // Ajouter un zéro devant les jours ou mois inférieurs à 10
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}-${month}-${year}`;
}

// Fonction pour obtenir la date actuelle sous forme de chaîne
function getCurrentDate() {
    const currentDate = new Date();
    return formatDate(currentDate);
}

// Fonction pour manipuler les chaînes de caractères : retourne la première lettre majuscule
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fonction pour générer un identifiant unique
function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

// Exportation des fonctions si besoin dans d'autres fichiers JS
export { addToList, isInList, formatDate, getCurrentDate, capitalizeFirstLetter, generateUniqueId };
