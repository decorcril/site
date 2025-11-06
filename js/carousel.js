// Carrossel automático com suporte a touch
class Carousel {
  constructor() {
    this.slides = document.querySelectorAll('.carousel__slide');
    this.dots = document.querySelectorAll('.carousel__indicator');
    this.currentIndex = 0;
    this.intervalTime = 3500;
    this.autoSlide = null;
    this.startX = 0;
    this.endX = 0;
    
    this.init();
  }
  
  init() {
    this.showSlide(this.currentIndex);
    this.startAutoSlide();
    this.addEventListeners();
    this.addTouchEvents();
  }
  
  showSlide(index) {
    this.slides.forEach(slide => slide.classList.remove('current-slide'));
    this.dots.forEach(dot => dot.classList.remove('current-slide'));
    
    this.slides[index].classList.add('current-slide');
    this.dots[index].classList.add('current-slide');
    
    this.currentIndex = index;
  }
  
  nextSlide() {
    let nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }
  
  prevSlide() {
    let prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prevIndex);
  }
  
  goToSlide(index) {
    this.showSlide(index);
  }
  
  startAutoSlide() {
    // Para qualquer intervalo existente antes de iniciar novo
    this.stopAutoSlide();
    this.autoSlide = setInterval(() => {
      this.nextSlide();
    }, this.intervalTime);
  }
  
  stopAutoSlide() {
    if (this.autoSlide) {
      clearInterval(this.autoSlide);
      this.autoSlide = null;
    }
  }
  
  resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
  
  addEventListeners() {
    const carousel = document.querySelector('.carousel');
    const nextButton = document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector('.carousel__button--left');
    
    carousel.addEventListener('mouseenter', () => {
      this.stopAutoSlide();
    });
    
    carousel.addEventListener('mouseleave', () => {
      this.startAutoSlide();
    });
   
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.stopAutoSlide();
        this.goToSlide(index);
        this.startAutoSlide(); // REINICIA o intervalo
      });
    });
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopAutoSlide();
      } else {
        this.startAutoSlide();
      }
    });
  }
  
  addTouchEvents() {
    const carousel = document.querySelector('.carousel');
    
    carousel.addEventListener('touchstart', (e) => {
      this.startX = e.touches[0].clientX;
      this.stopAutoSlide();
    });
    
    carousel.addEventListener('touchend', (e) => {
      this.endX = e.changedTouches[0].clientX;
      this.handleSwipe();
      this.startAutoSlide(); // REINICIA após swipe
    });
  }
  
  handleSwipe() {
    const swipeThreshold = 50;
    
    if (this.startX - this.endX > swipeThreshold) {
      this.nextSlide();
    } else if (this.endX - this.startX > swipeThreshold) {
      this.prevSlide();
    }
  }
}

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', () => {
  new Carousel();
});