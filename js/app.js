const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Smooth scroll para as seções com offset
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    const offset = 80; // Altura da navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Adiciona event listeners para os links do menu
document.querySelectorAll('.navbar__links[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    smoothScroll(target);
    
    // Fecha o menu mobile se estiver aberto
    if (window.innerWidth <= 768) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  });
});

// Para o link "Início" subir um pouco mais
document.querySelector('#home-page').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Fecha o menu mobile se estiver aberto
  if (window.innerWidth <= 768) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  }
});

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);