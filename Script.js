// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const backToTopButton = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content');

    // Function to handle scroll events
    function handleScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            backToTopButton.style.display = 'block';
        } else {
            nav.classList.remove('scrolled');
            backToTopButton.style.display = 'none';
        }

        // Fade in content on scroll
        contentSections.forEach(content => {
            const contentTop = content.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (contentTop < windowHeight - 50) {
                content.classList.add('show');
            }
        });

        // Highlight active nav link
        let currentSection = '';
        contentSections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Smooth scroll to sections
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Back to top button functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial call to handleScroll to set initial states
    handleScroll();

    // Add hover effect to nav links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add a simple loading animation
    const body = document.body;
    body.classList.add('loading');
    window.addEventListener('load', function() {
        body.classList.remove('loading');
        body.classList.add('loaded');
    });
});