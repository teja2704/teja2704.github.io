// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Slide and Fade Animations on Scroll
const sections = document.querySelectorAll('.section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);
