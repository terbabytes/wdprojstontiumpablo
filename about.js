document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navLinks a');
    const sections = document.querySelectorAll('section');
  
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent default link behavior
  
        const targetSectionId = link.getAttribute('href').substring(1); // Get section ID from href
        console.log(`Navigating to: ${targetSectionId}`);  // Debugging log
  
        // Hide all sections first
        sections.forEach((section) => {
          section.classList.add('hidden');  // Add 'hidden' class to hide the section
        });
  
        // Show the targeted section
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
          targetSection.classList.remove('hidden');  // Remove 'hidden' class to show the section
          console.log(`${targetSectionId} section is now visible.`);  // Debugging log
        } else {
          console.log(`Section with ID ${targetSectionId} not found!`);  // Debugging log
        }
      });
    });
  });
  