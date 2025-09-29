// script.js

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Mode Clair';
    } else {
        toggleButton.textContent = 'Mode Sombre';
    }
});