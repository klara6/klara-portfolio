/* =========================================
   Intro Animation
   - Typing effect for intro title
   - Fade out intro, reveal hero section
========================================= */

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");           // Intro overlay container
  const introTitle = document.getElementById("intro-title"); // Text element to type
  const heroTitle = document.getElementById("hero-title");  // Hero title to show after intro

  const text = "Welcome to Klara's Portfolio. ";           // Text to type
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      introTitle.textContent += text.charAt(i);           // Add one character at a time
      i++;
      setTimeout(typeWriter, 150);                        // Typing speed
    } else {
      // Pause, then fade out intro
      setTimeout(() => {
        intro.style.transition = "opacity 0.8s ease";
        intro.style.opacity = 0;                          // Fade out intro

        setTimeout(() => {
          intro.style.display = "none";                  // Remove from DOM
          heroTitle.style.opacity = 1;                   // Show hero title
        }, 800);
      }, 800); // Pause after typing
    }
  }

  typeWriter();
});


/* =========================================
   Section Fade-in on Scroll
   - All <section> elements initially hidden
   - Fade in as user scrolls
   - Animate skill bars when visible
========================================= */

// Set initial styles for all sections
document.querySelectorAll("section").forEach((section, index) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  section.style.transition = `all 0.8s ease-out ${index * 0.1}s`; // Staggered animation
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;

  // Update scroll progress bar width
  document.getElementById("scroll-bar").style.width = (scrollTop / docHeight) * 100 + "%";

  // Fade-in sections when they enter viewport
  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });

  // Animate skill bars when they become visible
  document.querySelectorAll(".progress-fill").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute("data-fill");
    }
  });
});


/* =========================================
   Card Tilt & Glow Hover Effect
   - Applies to all elements with class "card"
========================================= */
document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px) scale(1.02)";          // Slight lift
    card.style.boxShadow = "0 10px 25px rgba(88,196,198,0.25)";     // Glow effect
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";                 // Reset transform
    card.style.boxShadow = "0 0 0 rgba(0,0,0,0)";                   // Remove glow
  });

});


/* =========================================
   Project Highlights Carousel
   - Single-item carousel
   - Next / previous buttons
   - Auto-rotate every 5 seconds
========================================= */
const track = document.querySelector('.carousel-track');  // Carousel track container
const items = Array.from(track.children);                 // All carousel items
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0; // Current visible slide index

// Move carousel to current slide
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Auto-rotate carousel every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);

// Initialize carousel on page load
updateCarousel();
