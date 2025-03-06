// Function to load HTML components
async function loadComponent(url, containerId) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(containerId).innerHTML = html;
        } else {
            console.error(`Failed to load ${url}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error loading ${url}: ${error}`);
    }
}

// Load all components when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('components/navbar.html', 'navbar-container');
    loadComponent('components/hero.html', 'hero-container');
    loadComponent('components/about.html', 'about-container');
    loadComponent('components/experience.html', 'experience-container');
    loadComponent('components/contact.html', 'contact-container');
});