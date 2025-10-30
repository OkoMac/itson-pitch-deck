// Video Control Functions
function playVideo() {
    const video = document.getElementById('demoVideo');
    if (video) {
        video.playbackRate = 2.0; // Set to 2x speed
        video.play().then(() => {
            console.log('Video playing at 2x speed');
        }).catch(err => {
            console.error('Play error:', err);
            showFallback();
        });
    }
}

function pauseVideo() {
    const video = document.getElementById('demoVideo');
    if (video) {
        video.pause();
    }
}

function restartVideo() {
    const video = document.getElementById('demoVideo');
    if (video) {
        video.currentTime = 0;
        video.play().catch(err => {
            console.error('Restart error:', err);
        });
    }
}

function showFallback() {
    const wrapper = document.querySelector('.video-wrapper');
    const fallback = document.getElementById('videoFallback');
    if (wrapper) wrapper.style.display = 'none';
    if (fallback) fallback.style.display = 'block';
}

// Initialize video when page loads
window.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('demoVideo');

    if (video) {
        // Set default playback speed to 2x
        video.playbackRate = 2.0;

        // Add event listeners
        video.addEventListener('loadedmetadata', function() {
            console.log('Video loaded successfully');
            console.log('Duration:', video.duration, 'seconds');
            video.playbackRate = 2.0; // Ensure 2x speed after metadata loads
        });

        video.addEventListener('error', function(e) {
            console.error('Video failed to load');
            showFallback();
        });

        // Try to load video
        video.load();
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

// Add interactive animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and sections
document.querySelectorAll('.feature-card, .stat-card, .device-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.watch-container');
    if (parallax && scrolled < window.innerHeight) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Dynamic typing effect for tagline
const tagline = document.querySelector('.tagline');
if (tagline) {
    tagline.style.opacity = '0';
    setTimeout(() => {
        tagline.style.transition = 'opacity 1s ease-in';
        tagline.style.opacity = '1';
    }, 1000);
}

// Add hover effect to table rows
document.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'all 0.3s ease';
    });
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
