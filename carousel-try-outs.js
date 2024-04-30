const carousel = document.getElementById('carousel');
const carouselImages = carousel.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('.carousel-image');
const indicatorsContainer = document.getElementById('indicators');
let currentSlide = 0;
let slideInterval;

function updateCarousel() {
  const offset = -currentSlide * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function goToSlide(n) {
  currentSlide = (n + images.length) % images.length;
  updateCarousel();
}

function setupIndicators() {
  images.forEach((image, index) => {
    const indicator = document.createElement('button');
    indicator.classList.add('indicator');
    if (index === currentSlide) {
      indicator.classList.add('active');
    }
    indicator.addEventListener('click', () => {
      goToSlide(index);
      resetInterval();
    });
    indicatorsContainer.appendChild(indicator);
  });
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000); // Change to desired interval
}

setupIndicators();
resetInterval();