const navToggle = document.querySelector('.mob-nav-tog');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible')
    ? primaryNav.setAttribute('aria-expanded', false)
    : primaryNav.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});
