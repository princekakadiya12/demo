// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

// Project details will be loaded from this data
const projectsData = {
    project1: {
        title: "Portfolio Website",
        description: `A modern and responsive portfolio website showcasing:
        
        • Clean and professional design
        • Responsive layout for all devices
        • Smooth animations and transitions
        • Contact form integration
        • Project showcase functionality
        • GitHub Pages deployment`,
        image: "assets/portfolio.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub Pages"],
        liveLink: "https://princekakadiya12.github.io/demo/",
        githubLink: "https://github.com/princekakadiya12/demo"
    },
    project2: {
        title: "Weather Dashboard",
        description: `Real-time weather application featuring:
        
        • Current weather conditions
        • 5-day weather forecast
        • Location-based weather data
        • Search by city functionality
        • Dynamic weather icons
        • Responsive design`,
        image: "assets/weather.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"],
        liveLink: "https://princekakadiya12.github.io/weather-app/",
        githubLink: "https://github.com/princekakadiya12/weather-app"
    },
    project3: {
        title: "Task Manager",
        description: `Full-featured task management application including:
        
        • Task creation and management
        • Priority levels and due dates
        • Local storage persistence
        • Filter and search functionality
        • Drag and drop organization
        • Responsive interface`,
        image: "assets/tasks.jpg",
        technologies: ["React", "CSS", "LocalStorage", "Drag & Drop API"],
        liveLink: "https://princekakadiya12.github.io/task-manager/",
        githubLink: "https://github.com/princekakadiya12/task-manager"
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
