// main.js

// ===============================
// Navigation vers une section
// ===============================
const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
};


// ===============================
// Ouvrir / Fermer le menu
// ===============================
const toggleMenu = () => {
    const menu = document.querySelector('.menu');

    if (menu) {
        menu.classList.toggle('active');
    }
};


// ===============================
// Initialisation des événements
// ===============================
document.addEventListener('DOMContentLoaded', () => {

    // Bouton menu
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const target = link.getAttribute('href').substring(1);
            navigateToSection(target);
        });
    });

});

                                               
