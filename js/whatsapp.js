// WhatsApp flutuante - esconder durante scroll para baixo
let lastScrollTop = 0;
const whatsappBtn = document.querySelector('.whatsapp-float');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scroll para baixo - esconde
    whatsappBtn.style.transform = 'translateY(80px)';
  } else {
    // Scroll para cima - mostra
    whatsappBtn.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop;
});

// Mostrar após 3 segundos (opcional)
setTimeout(() => {
  whatsappBtn.style.opacity = '1';
}, 3000);