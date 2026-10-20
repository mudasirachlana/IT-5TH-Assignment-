// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scroll for Blog Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        let filter = e.target.value.toLowerCase();
        let posts = document.querySelectorAll('.blog-card');
        posts.forEach(post => {
            let title = post.querySelector('h3').innerText.toLowerCase();
            if (title.includes(filter)) {
                post.style.display = "";
            } else {
                post.style.display = "none";
            }
        });
    });
}

console.log("UL Blog Website Loaded Successfully");