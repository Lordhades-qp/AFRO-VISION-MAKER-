// utils.js

// Ajouter un élément à une liste
function addToList(list, item) {
    list.push(item);
    return list;
}

// Vérifier si un élément existe dans une liste
function isInList(list, item) {
    return list.includes(item);
}

// Formater date en dd-mm-yyyy
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}-${month}-${year}`;
}

// Date actuelle
function getCurrentDate() {
    return formatDate(new Date());
}

// Capitaliser première lettre
function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Générer ID unique
function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substring(2, 11);
}
