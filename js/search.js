// search.js

function initSearchSystem() {

    const searchInput = document.querySelector('.search-input');
    const searchSuggestions = document.querySelector('.search-suggestions');

    if (!searchInput || !searchSuggestions) return;

    searchInput.addEventListener('focus', () => {
        searchSuggestions.style.display = 'block';
    });

    searchInput.addEventListener('blur', () => {

        setTimeout(() => {
            searchSuggestions.style.display = 'none';
        }, 200);

    });
}

document.addEventListener("DOMContentLoaded", initSearchSystem);
