document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', () => {
        link.classList.add('temporary-visited');
    });
});

const backToTopBtn = document.getElementById('backToTop');

const toggleBackToTop = () => {
    if (!backToTopBtn) {
        return;
    }
    backToTopBtn.classList.toggle('visible', window.scrollY > 260);
};

window.addEventListener('scroll', toggleBackToTop, { passive: true });

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

toggleBackToTop();