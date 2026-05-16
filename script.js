const heroSlides = document.querySelectorAll('.hero-img .hero-slide');
let heroIndex = 0;

function showHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextHeroSlide() {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  showHeroSlide(heroIndex);
}

showHeroSlide(heroIndex);
setInterval(nextHeroSlide, 4500);