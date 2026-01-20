// Scroll event listener for nav bar transitions
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const scrollPosition = window.scrollY;

  // Add 'scrolled' class when user scrolls down more than 50px
  if (scrollPosition > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Smooth scroll anchor links (enhances built-in smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
