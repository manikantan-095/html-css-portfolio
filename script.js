// DARK MODE TOGGLE
function toggleDark() {
    document.body.classList.toggle('dark');
}

// SCROLL FADE-IN EFFECT
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
});
