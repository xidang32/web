// Parallax background
const bg = document.querySelector('.body-bg');
const speed = 0.3;

function onScroll() {
    const y = window.scrollY;

    // Make the bg flow slower than the actual site
    bg.style.transform = `translateY(${y * speed}px)`;
}

addEventListener('scroll', onScroll, { passive: true });
addEventListener('load', onScroll);