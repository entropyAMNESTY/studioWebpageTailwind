const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    // Adds flex because it doesn't have it
    menu.classList.toggle('flex');
    // Removes hidden
    menu.classList.toggle('hidden');
}
