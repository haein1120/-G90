// Navigation Toggle - Complete rewrite for mobile compatibility
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        // Click event for hamburger
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Hamburger clicked, menu active:', navMenu.classList.contains('active'));
        });
        
        // Touch event for mobile
        hamburger.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Hamburger touched, menu active:', navMenu.classList.contains('active'));
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Close menu first
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Small delay before scrolling to ensure menu is closed
                setTimeout(() => {
                    // Smooth scroll to target section
                    const targetId = link.getAttribute('href');
                    if (targetId && targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }, 100);
            });
            
            link.addEventListener('touchstart', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Close menu first
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Small delay before scrolling to ensure menu is closed
                setTimeout(() => {
                    // Smooth scroll to target section
                    const targetId = link.getAttribute('href');
                    if (targetId && targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }, 100);
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling for navigation links
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

// Phone button hover effects
document.querySelectorAll('.phone-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Add loading animation to images (excluding hero image and fleet images)
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img:not(.taxi-image):not(.fleet-taxi-image)');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Service cards hover effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Fleet image hover effect
document.querySelectorAll('.fleet-taxi-image').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Hero image slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.taxi-image');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 4000; // 4 seconds in milliseconds

    function showSlide(index) {
        // Hide all images
        images.forEach(img => img.classList.remove('active'));
        
        // Show current image
        images[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        // Clear any existing interval first
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        // Start new interval with exact timing
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    function restartAutoSlide() {
        stopAutoSlide();
        // Small delay to ensure clean restart
        setTimeout(startAutoSlide, 100);
    }



    // Pause auto slide on hover
    const imageSlider = document.querySelector('.image-slider');
    if (imageSlider) {
        imageSlider.addEventListener('mouseenter', stopAutoSlide);
        imageSlider.addEventListener('mouseleave', startAutoSlide);
    }

    // Initialize first slide
    showSlide(0);
    
    // Start auto slide after a short delay
    setTimeout(startAutoSlide, 1000);
}); 