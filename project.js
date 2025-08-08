// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

// Project details will be loaded from this data
const projectsData = {
    project1: {
        title: "Project 1",
        description: `A responsive web application built with React. This project showcases modern web development practices including:
        
        • Responsive design principles
        • Modern React hooks and patterns
        • State management with Context API
        • RESTful API integration
        • Performance optimization techniques`,
        image: "assets/project1.jpg",
        technologies: ["React", "CSS", "JavaScript", "REST API", "Responsive Design"],
        liveLink: "https://project1.com",
        githubLink: "https://github.com/username/project1"
    },
    project2: {
        title: "Project 2",
        description: `Interactive dashboard using modern JavaScript featuring:
        
        • Real-time data visualization
        • Interactive charts and graphs
        • Data filtering and sorting
        • Export functionality
        • Responsive layout`,
        image: "assets/project2.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "REST API"],
        liveLink: "https://project2.com",
        githubLink: "https://github.com/username/project2"
    },
    project3: {
        title: "Project 3",
        description: `E-commerce website with shopping cart functionality including:
        
        • Product catalog with filtering
        • Shopping cart management
        • User authentication
        • Payment integration
        • Order management`,
        image: "assets/project3.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        liveLink: "https://project3.com",
        githubLink: "https://github.com/username/project3"
    }
};

// Load project details
function loadProjectDetails() {
    const projectContent = document.getElementById('project-content');
    const project = projectsData[projectId];

    if (!project) {
        projectContent.innerHTML = '<h1>Project not found</h1>';
        return;
    }

    projectContent.innerHTML = `
        <div class="project-header">
            <h1>${project.title}</h1>
        </div>
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <div class="project-description">
                ${project.description}
            </div>
            <div class="tech-stack">
                ${project.technologies.map(tech => `
                    <span class="tech-tag">${tech}</span>
                `).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveLink}" target="_blank">View Live</a>
                <a href="${project.githubLink}" target="_blank">View Code</a>
            </div>
        </div>
    `;
}

// Mobile navigation
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjectDetails();
    setupMobileNav();
});
