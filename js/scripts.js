// ===============================
// Navigation Menu Toggle
// ===============================
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', () => {
            navigation.classList.toggle('open');
        });
    }

    // ===============================
    // Smooth Scroll Navigation
    // ===============================
    document.querySelectorAll('.nav-link').forEach(link => {

        link.addEventListener('click', (e) => {
            e.preventDefault();

            const target = link.getAttribute('href');

            if (target && target.startsWith('#')) {
                document.querySelector(target)?.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });

    });

});
