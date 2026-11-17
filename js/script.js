(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Apply the visitor's saved theme, or follow the operating-system preference.
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('adeep-portfolio-theme'); } catch (_) {}
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = savedTheme || (prefersDark ? 'dark' : 'light');

  function updateThemeButton() {
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    themeButton.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  updateThemeButton();

  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('adeep-portfolio-theme', root.dataset.theme); } catch (_) {}
    updateThemeButton();
  });

  function closeMenu() {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      menuButton.focus();
    }
  });

  document.getElementById('current-year').textContent = new Date().getFullYear();
})();
