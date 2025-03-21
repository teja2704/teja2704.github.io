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
// Smooth scrolling for section links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Fade-in effect when scrolling
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

// Observe sections with .fade-in
document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// Button hover effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
        btn.style.transition = 'all 0.3s ease-in-out';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Page load animation
window.onload = () => {
    document.body.classList.add('loaded');
};
