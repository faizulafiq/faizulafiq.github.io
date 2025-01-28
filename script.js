// Get the sections and corresponding navbar links
const sections = [
    { sectionId: 'about', linkId: 'about-link' },
    { sectionId: 'projects', linkId: 'projects-link' },
    { sectionId: 'contact', linkId: 'contact-link' },
];

// Function to check if a section is in view
function checkIfInView() {
    sections.forEach(item => {
        const section = document.getElementById(item.sectionId);
        const link = document.getElementById(item.linkId);
        
        // Get the position of the section
        const rect = section.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        // Add or remove the blue class based on whether the section is in view
        if (inView) {
            link.classList.add('bold');
        } else {
            link.classList.remove('bold');
        }
    });
}

// Listen for scroll events and check if the sections are in view
window.addEventListener('scroll', checkIfInView);

// Check on page load in case a section is already in view
document.addEventListener('DOMContentLoaded', checkIfInView);