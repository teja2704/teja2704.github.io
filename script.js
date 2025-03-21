document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector(".hero-content h1");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(-20px)";

    setTimeout(() => {
        heroText.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 500);
});
