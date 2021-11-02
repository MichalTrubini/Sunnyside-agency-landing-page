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

const links = document.querySelectorAll('.about__link');
const highlightOne = document.querySelector('.about__link-border-one');
const highlightTwo = document.querySelector('.about__link-border-two');

links.forEach(highlightOn);

function highlightOn(link){
    link.addEventListener('mouseenter',function(){
        highlightOne.style.opacity = 1;
        highlightTwo.style.opacity = 1;
    })
    link.addEventListener('mouseleave',function(){
        highlightOne.style.opacity = 0.25;
        highlightTwo.style.opacity = 0.25;
    })
}