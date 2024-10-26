// Smooth Scroll for Navigation Links
document.querySelectorAll('.Navi a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll("section");
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const link = document.querySelector(`.Navi a[href="#${section.id}"]`);
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.Navi a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Form Submission for Search
document.querySelector('.search-container form').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = this.querySelector('input[type="text"]').value;
    alert(`Searching for: ${query}`);
});
