const revealTargets = document.querySelectorAll(
    '.grid .item, .band, section h2, section .sub, .map-container, .address-info'
);

const showAllTargets = () => {
    revealTargets.forEach(target => target.classList.add('is-visible'));
};

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)) {
    showAllTargets();
} else {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealTargets.forEach(target => {
        target.classList.add('scroll-reveal');
        observer.observe(target);
    });
}
