// Lightbox para imagens
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.querySelector(".modal__caption");
const descriptionText = document.getElementById("modalDescription"); // NOVA VARIÁVEL
const closeBtn = document.querySelector(".modal__close");

// Objeto com as descrições detalhadas dos produtos
const productDetails = {
  'trofeu.jpg': 'Troféus personalizados em acrílico de alta qualidade, disponíveis em diversos tamanhos e cores. Perfeito para cerimônias de premiação, eventos esportivos e corporativos. Material resistente e acabamento impecável.',
  'medalha.jpg': 'Medalhas em acrílico com fita personalizável, ideal para competições, maratonas e eventos educacionais. Alta durabilidade e acabamento premium. Personalização com logo e texto.',
  'trofeu1.jpeg': 'Conheça nossa linha completa de troféus em acrílico. Produzidos com matéria-prima de primeira qualidade e tecnologia de ponta.',
  'loja.jpeg': 'Visite nossa loja e conheça pessoalmente nossa variedade de produtos em acrílico. Atendimento especializado e produtos de qualidade.',
  'equipe.jpeg': 'Nossa equipe altamente qualificada está pronta para atender suas necessidades com profissionalismo e dedicação.',
  'produtos.jpeg': 'Ampla variedade de produtos em acrílico para todos os tipos de eventos e necessidades. Qualidade garantida.'
  // Adicione mais descrições conforme suas imagens
};

// Adiciona evento de clique em todas as imagens dos cards
document.querySelectorAll('.services__image img').forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    
    // NOVO: Adiciona descrição detalhada baseada no nome do arquivo
    const imageName = this.src.split('/').pop(); // Pega o nome do arquivo da imagem
    descriptionText.innerHTML = productDetails[imageName] || 'Entre em contato para mais informações sobre este produto!';
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