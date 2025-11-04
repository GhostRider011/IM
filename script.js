const navButton = document.querySelector('.hero__menu-button');
const navLinks = document.querySelector('.hero__nav-links');
const yearEl = document.getElementById('year');

if (navButton && navLinks) {
  navButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
