// Lightbox para imagens
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.querySelector(".modal__caption");
const closeBtn = document.querySelector(".modal__close");

// Adiciona evento de clique em todas as imagens dos cards
document.querySelectorAll('.services__image img').forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Fecha o modal
closeBtn.addEventListener('click', function() {
  modal.style.display = "none";
});

// Fecha o modal clicando fora da imagem
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Fecha com ESC
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});