// Project data
const projects = [
    {
        id: "project1",
        title: "Project 1",
        description: "A responsive web application built with React",
        image: "assets/project1.jpg",
        technologies: ["React", "CSS", "JavaScript"],
    },
    {
        id: "project2",
        title: "Project 2",
        description: "Interactive dashboard using modern JavaScript",
        image: "assets/project2.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "project3",
        title: "Project 3",
        description: "E-commerce website with shopping cart functionality",
        image: "assets/project3.jpg",
        technologies: ["React", "CSS", "JavaScript"],
    }
];

// Load projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 1.5rem;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">${project.title}</h3>
                <p style="margin-bottom: 1rem;">${project.description}</p>
                <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                    ${project.technologies.map(tech => `
                        <span style="background: var(--light-bg); padding: 0.25rem 0.5rem; border-radius: 5px;">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                <a href="project.html?id=${project.id}" style="color: var(--primary-color);">View Project →</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Mobile navigation
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth scrolling for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Form handling with email functionality
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: form.querySelector('input[type="text"]').value,
            email: form.querySelector('input[type="email"]').value,
            message: form.querySelector('textarea').value
        };
        
        try {
            // Create mailto link with form data
            const mailtoLink = `mailto:prince.kakadiya@example.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your default email client will open to send the email.');
            form.reset();
        } catch (error) {
            alert('There was an error sending your message. Please try again.');
            console.error('Error:', error);
        }
    });
}

// Scroll animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupMobileNav();
    setupSmoothScroll();
    setupContactForm();
    setupScrollAnimations();
});
