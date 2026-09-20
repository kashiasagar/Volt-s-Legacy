/* ==========================================================================
   VOLT'S LEGACY SOLAR - Hero Carousel Module
   ========================================================================== */

class HeroCarousel {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 2;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 6000; // 6 seconds
    this.isPaused = false;
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  init() {
    this.slides = document.querySelectorAll('.hero-slide');
    this.dots = document.querySelectorAll('.carousel-dots .dot');
    this.prevBtn = document.querySelector('.carousel-btn.prev');
    this.nextBtn = document.querySelector('.carousel-btn.next');
    this.heroSection = document.querySelector('.hero-section');

    if (!this.slides.length || this.slides.length <= 1) return;

    // Attach Event Listeners
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prev();
        this.resetAutoPlay();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.next();
        this.resetAutoPlay();
      });
    }

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.goToSlide(index);
        this.resetAutoPlay();
      });
    });

    // Pause on hover
    if (this.heroSection) {
      this.heroSection.addEventListener('mouseenter', () => this.pause());
      this.heroSection.addEventListener('mouseleave', () => this.resume());

      // Touch events for mobile swipe
      this.heroSection.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.heroSection.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      }, { passive: true });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    this.startAutoPlay();
  }

  goToSlide(index) {
    if (index < 0) index = this.totalSlides - 1;
    if (index >= this.totalSlides) index = 0;

    this.currentSlide = index;

    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });
  }

  next() {
    this.goToSlide(this.currentSlide + 1);
  }

  prev() {
    this.goToSlide(this.currentSlide - 1);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      if (!this.isPaused) {
        this.next();
      }
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        this.next(); // Swiped left -> show next
      } else {
        this.prev(); // Swiped right -> show prev
      }
      this.resetAutoPlay();
    }
  }
}

// Export / Attach to window
window.HeroCarousel = HeroCarousel;
