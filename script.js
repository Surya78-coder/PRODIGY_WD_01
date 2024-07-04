// script.js

// Add event listener to window scroll event
window.addEventListener('scroll', function() {
    // Get the navigation menu element
    const nav = document.getElementById('nav');

    // Check if the user has scrolled down
    if (window.scrollY > 200) {
        // Add the 'crolled' class to the navigation menu
        nav.classList.add('scrolled');
    } else {
        // Remove the 'crolled' class from the navigation menu
        nav.classList.remove('scrolled');
    }
});

// Add event listener to navigation menu item hover event
document.querySelectorAll('#nav li').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        // Get the navigation menu element
        const nav = document.getElementById('nav');

        // Add the 'hover' class to the navigation menu
        nav.classList.add('hover');
    });

    item.addEventListener('mouseout', function() {
        // Get the navigation menu element
        const nav = document.getElementById('nav');

        // Remove the 'hover' class from the navigation menu
        nav.classList.remove('hover');
    });
});