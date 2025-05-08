// Scroll reveal animations
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Typing effect for subtitle
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
  const fullText = subtitle.textContent;
  subtitle.textContent = '';
  let index = 0;

  function typeWriter() {
    if (index < fullText.length) {
      subtitle.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, 40); // Typing speed
    }
  }

  typeWriter();
}

// Scroll header effect
const header = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Back to top button
const backToTop = document.createElement('button');
backToTop.innerText = '↑';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
