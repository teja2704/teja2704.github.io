// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Section Animation on Scroll
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    section.classList.add("animate");
    observer.observe(section);
});

// Dynamic Color Shift for Navbar on Scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.95)";
        navbar.style.boxShadow = "0 0 20px rgba(0, 255, 234, 0.5)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
        navbar.style.boxShadow = "none";
    }
});