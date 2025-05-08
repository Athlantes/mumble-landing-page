
// Scroll-based animation trigger
const faders = document.querySelectorAll('.fade-up');

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

faders.forEach(el => appearOnScroll.observe(el));
