// JavaScript to add active class and smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });
});
