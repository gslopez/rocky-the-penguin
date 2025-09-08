// Rocky's Rock Collection Website JavaScript

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Rock search functionality
function searchRocks() {
    const searchTerm = document.getElementById('rock-search').value.toLowerCase();
    const rockCards = document.querySelectorAll('.rock-card');
    
    rockCards.forEach(card => {
        const rockType = card.getAttribute('data-type') || '';
        const rockColor = card.getAttribute('data-color') || '';
        const rockLocation = card.getAttribute('data-location') || '';
        const rockTitle = card.querySelector('h4').textContent.toLowerCase();
        const rockDescription = card.querySelector('.rock-description').textContent.toLowerCase();
        
        const searchableText = `${rockType} ${rockColor} ${rockLocation} ${rockTitle} ${rockDescription}`.toLowerCase();
        
        if (searchableText.includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block';
            // Add a gentle fade-in animation
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transition = 'opacity 0.3s ease';
            }, 100);
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show a message if no rocks found
    const visibleCards = Array.from(rockCards).filter(card => card.style.display !== 'none');
    const rockGrid = document.querySelector('.rock-grid');
    
    // Remove any existing "no results" message
    const existingMessage = document.querySelector('.no-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (visibleCards.length === 0 && searchTerm !== '') {
        const noResultsDiv = document.createElement('div');
        noResultsDiv.className = 'no-results-message';
        noResultsDiv.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #546e7a;">
                <h3 style="color: #4a90e2; margin-bottom: 1rem;">🔍 No rocks found</h3>
                <p>I haven't found any rocks matching "${searchTerm}" yet. Maybe it's time for another expedition to Antarctica!</p>
                <p style="margin-top: 1rem; font-style: italic;">Try searching for: meteorite, quartz, volcanic glass, glacial, or colors like rainbow, black, gray</p>
            </div>
        `;
        rockGrid.appendChild(noResultsDiv);
    }
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('rock-search');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchRocks();
            }
        });
        
        // Real-time search as user types (with debouncing)
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(searchRocks, 300);
        });
    }
});

// Navigation highlighting
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            currentSection = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update navigation on scroll
window.addEventListener('scroll', highlightCurrentSection);

// Mobile menu toggle (for smaller screens)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-open');
}

// Add some delightful interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Add hover effects to rock cards
    const rockCards = document.querySelectorAll('.rock-card');
    rockCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 50px rgba(44, 90, 160, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(44, 90, 160, 0.1)';
        });
    });
    
    // Add a gentle animation when blog posts come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animation to blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(post);
    });
});

// Fun penguin facts for Easter egg
const penguinFacts = [
    "Did you know? Adelie penguins can swim up to 17 miles per hour!",
    "Fun fact: Penguins have excellent eyesight and can see colors - perfect for spotting colorful rocks!",
    "Penguin wisdom: The best rock hunting happens during low tide when more specimens are exposed.",
    "Antarctic fact: The ice here is so clear that rocks underneath it look like they're floating!",
    "Rocky's tip: Always hunt for rocks with a buddy - it's safer and more fun!"
];

// Easter egg: Click the penguin emoji in the nav multiple times
let clickCount = 0;
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                alert(penguinFacts[Math.floor(Math.random() * penguinFacts.length)]);
                clickCount = 0;
            }
        });
    }
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #4a90e2 !important;
        font-weight: bold;
    }
    
    .mobile-open {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 1rem;
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .nav-container::after {
            content: '☰';
            font-size: 1.5rem;
            cursor: pointer;
            color: #4a90e2;
        }
    }
`;
document.head.appendChild(style);