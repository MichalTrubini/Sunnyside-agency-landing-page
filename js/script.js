const navMenu = document.querySelector('.nav__menu');
const navMenuHamburger =document.querySelector('.nav__menu-icon');

navMenu.style.display = 'none';

navMenuHamburger.addEventListener('click',toggleMenu);

function toggleMenu() {
    if (navMenu.style.display === 'none') {
        navMenu.style.display = 'flex';
    }
    else {
        navMenu.style.display = 'none';
    }
}