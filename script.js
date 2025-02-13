function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
      alert("URL copied to clipboard!");
  }).catch(err => {
      console.error("Error copying text: ", err);
  });
}

// Detect when user scrolls
window.addEventListener('scroll', () => {
  const wave = document.querySelector('.hero-wave');
  if (window.scrollY > 50) {
      wave.classList.add('visible');
  } else {
      wave.classList.remove('visible');
  }
});

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
  currentSlide = (currentSlide + 1) % slides.length; // Loop through slides
}

setInterval(showSlide, 4000); // Change slide every 4 seconds
showSlide(); // Initialize the first slide



