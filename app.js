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

// animate "typing" animation 
const text = document.querySelector(".self-presentation")

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "My name is Zhilin, nice to meet you."
    }, 2000);
    setTimeout(() => {
        text.textContent = "I like to make extraordinary websites."
    }, 8000);
    setTimeout(() => {
        text.textContent = "Now, scroll down and enjoy your stay."
    }, 14000);
}

textLoad();

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
