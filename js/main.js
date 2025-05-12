// main.js

// Gestion de la navigation entre les sections const navigateToSection = (sectionId) => { const section = document.getElementById(sectionId); if (section) { section.scrollIntoView({ behavior: 'smooth' }); } };

// Gestion de l'ouverture/fermeture du menu de navigation const toggleMenu = () => { const menu = document.querySelector('.menu'); menu.classList.toggle('active'); };

// Initialisation des événements document.addEventListener('DOMContentLoaded', () => { const menuToggle = document.querySelector('.menu-toggle'); if (menuToggle) { menuToggle.addEventListener('click', toggleMenu); }

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href').substring(1);
        navigateToSection(target);
    });
});

});

                                               
