// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animation on scroll
const scrollElements = document.querySelectorAll('.project, #about');

const scrollCallback = () => {
    scrollElements.forEach((el) => {
        const elementPos = el.getBoundingClientRect().top;
        const viewHeight = window.innerHeight - 100;

        if (elementPos < viewHeight) {
            el.classList.add('reveal');
        }
    });
};

window.addEventListener('scroll', scrollCallback);
scrollCallback(); // Call once on load
