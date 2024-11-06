// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarList = document.querySelector('.navbar-list');

menuToggle.addEventListener('click', () => {
    navbarList.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.navbar-list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarList.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling (if needed)
const petitionForm = document.getElementById('petition-form');
if (petitionForm) {
    petitionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
}