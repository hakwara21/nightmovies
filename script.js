// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    if(searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if(query) {
                alert(`البحث عن: ${query}`);
                // In a real app, you would redirect to search results page
                // window.location.href = `/search?q=${encodeURIComponent(query)}`;
            }
        });
    }
    
    // Movie hover effect
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        });
    }
// Initialize tooltips for rating stars
    const ratingStars = document.querySelectorAll('[data-feather="star"]');
    ratingStars.forEach(star => {
        star.setAttribute('title', 'التقييم');
    });

    // Video player functionality
    const watchNowBtn = document.getElementById('watch-now-btn');
    const videoPlayer = document.querySelector('video-player');
    
    if (watchNowBtn && videoPlayer) {
        watchNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Sample video URL - replace with actual video source
            videoPlayer.openPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
        });
    }
    // Remove this click handler since we're now using proper links to movie details page
// Admin login protection (basic example)
    if (window.location.pathname.includes('admin.html')) {
        const password = prompt('الرجاء إدخال كلمة مرور المشرف:');
        if (password !== 'admin123') { // Replace with proper authentication
            window.location.href = '/';
            alert('كلمة المرور غير صحيحة');
        }
    }
});