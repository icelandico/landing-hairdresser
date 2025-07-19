const menu = document.querySelector('.navigation-container');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');

menu.addEventListener('click', () => {
  console.log('menu', mobileMenu);
  document.body.classList.add('overflow-hidden');
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('menu-visible');
});

closeIcon.addEventListener('click', () => {
  document.body.classList.remove('overflow-hidden');
  mobileMenu.classList.remove('menu-visible');
  mobileMenu.classList.add('hidden');
})
