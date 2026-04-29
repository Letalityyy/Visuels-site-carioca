// Génération des particules de graines
function createSeeds() {
    const container = document.getElementById('seedsContainer');
    const seedCount = 50;

    for (let i = 0; i < seedCount; i++) {
        const seed = document.createElement('div');
        seed.className = 'seed';
        seed.style.left = Math.random() * 100 + '%';
        seed.style.top = Math.random() * 100 + '%';
        seed.style.animationDelay = Math.random() * 15 + 's';
        seed.style.animationDuration = (10 + Math.random() * 10) + 's';
        container.appendChild(seed);
    }
}

// Toggle menu mobile
function toggleMenu() {
    document.getElementById('mainNav').classList.toggle('active');
}

// Animations on scroll
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Init
document.addEventListener('DOMContentLoaded', function() {
    createSeeds();
    handleScroll();
});

window.addEventListener('scroll', handleScroll);
