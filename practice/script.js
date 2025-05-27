document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = document.querySelectorAll('[data-nav-link]'); // Select all nav links

    // Toggle mobile navigation visibility
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        menuToggle.classList.toggle('active'); // Toggle active class for icon animation
    });

    // Close mobile navigation when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });

    // Optional: Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});










 