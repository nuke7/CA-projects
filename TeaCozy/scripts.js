const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

function navToggle() {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index / 3 + 0.1}s`
        }
    });
    burger.classList.toggle('active');
};


burger.addEventListener('click', navToggle);