const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        };
    });
});

const hiddenElements = document.querySelectorAll('.hidden-translate');
hiddenElements.forEach((el) => observer.observe(el));


// show nav bar when scrolling up
const navBar = document.querySelector(".nav-bar");
let prevScrollPos = window.pageYOffset;
let scrollDir = '';

window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        scrollDir = 'down';
        navBar.classList.add('nav-hide');
    } else {
        scrollDir = 'up';
        navBar.classList.remove('nav-hide');
        navBar.classList.add('nav-show');
    }

    prevScrollPos = currentScrollPos;
});


// toggle nav-bar menu
const navLinks = document.querySelector(".nav-links");

function toggleNavLinks() {
    navLinks.classList.toggle('active');
};
