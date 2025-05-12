
// scripts.js - Fichier principal pour les fonctionnalités JS de votre site

// Gestion de la navigation - Ouverture et fermeture du menu document.addEventListener('DOMContentLoaded', function () { const menuToggle = document.querySelector('.menu-toggle'); const navigation = document.querySelector('.navigation');

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        navigation.classList.toggle('open');
    });
}

});

// Smooth Scroll pour les ancres const smoothScroll = (target) => { document.querySelector(target).scrollIntoView({ behavior: 'smooth' }); };

// Écouteur pour les liens de navigation document.querySelectorAll('.nav-link').forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); const target = link.getAttribute('href'); smoothScroll(target); }); });

// Autres scripts spécifiques peuvent être ajoutés ici

