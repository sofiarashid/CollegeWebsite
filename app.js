const track = document.querySelector('.carousel-track');
const slides = track ? Array.from(track.children) : [];
let currentIndex = 0;

function updateSlide() {
  if (!track || slides.length === 0) return;

  const amountToMove = -currentIndex * 100;
  track.style.transform = `translateX(${amountToMove}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

// Auto-play every 5 seconds when there is more than one slide.
if (slides.length > 1) {
  setInterval(nextSlide, 5000);
}
