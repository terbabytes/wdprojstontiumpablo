document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navLinks a');
    const sections = document.querySelectorAll('section');
    const body = document.body;
  
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
  
            const targetSectionId = link.getAttribute('href').substring(1);
            console.log(`Navigating to: ${targetSectionId}`);
  
            sections.forEach(section => {
                section.classList.add('hidden');
            });
  
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                console.log(`${targetSectionId} section is now visible.`);
  
                const bgColor = link.dataset.background; // Keep this if you want body background change
                body.style.backgroundColor = bgColor; // Keep this if you want body background change
  
  
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                link.classList.add('active');
  
            } else {
                console.log(`Section with ID ${targetSectionId} not found!`);
            }
        });
    });
  });