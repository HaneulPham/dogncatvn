document.addEventListener("DOMContentLoaded", function() {
    // Scroll to section on navigation link click
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Highlight section on scroll
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                navLink.classList.add("active");
            } else {
                navLink.classList.remove("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.id) {
            observer.observe(section);
        }
    });

    // Toggle dark mode
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
