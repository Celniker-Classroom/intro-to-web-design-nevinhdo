document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', () => {
        link.classList.add('temporary-visited');
    });
});

const rootElement = document.documentElement;
const compactWidthQuery = window.matchMedia('(max-width: 1024px)');

const isMobileDevice = () => {
    const userAgent = navigator.userAgent || '';
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || coarsePointer;
};

const applyCompactMode = () => {
    const shouldScaleDown = compactWidthQuery.matches || isMobileDevice();
    rootElement.classList.toggle('compact-mode', shouldScaleDown);
};

applyCompactMode();

if (typeof compactWidthQuery.addEventListener === 'function') {
    compactWidthQuery.addEventListener('change', applyCompactMode);
} else if (typeof compactWidthQuery.addListener === 'function') {
    compactWidthQuery.addListener(applyCompactMode);
}

window.addEventListener('resize', applyCompactMode);

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