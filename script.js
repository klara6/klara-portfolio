/* =========================================
   Section Fade-in on Scroll
========================================= */
document.querySelectorAll("section").forEach((section, index) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  section.style.transition = `all 0.8s ease-out ${index * 0.1}s`;
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  document.getElementById("scroll-bar").style.width = (scrollTop / docHeight) * 100 + "%";

  // Fade-in sections
  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });

  // Animate skill bars
  document.querySelectorAll(".progress-fill").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute("data-fill");
    }
  });
});

/* =========================================
   Card Tilt & Glow Hover Effect
========================================= */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px) rotateX(2deg) rotateY(2deg)";
    card.style.boxShadow = "0 12px 28px rgba(88,196,198,0.25)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 8px 20px rgba(88,196,198,0.2)";
  });
});

/* =========================================
    Effect for Hero Tagline
========================================= */
const texts = [
  "Welcome to my portfolio.",
  "Explore my work and past projects.",
  "Contact me, I’d love to connect."
];

let i = 0;
const typingEl = document.getElementById("typing");

function fadeText() {
  typingEl.style.opacity = 0;
  setTimeout(() => {
    typingEl.textContent = texts[i];
    typingEl.style.opacity = 1;
    i = (i + 1) % texts.length;
    setTimeout(fadeText, 2500);
  }, 500);
}

fadeText();

/* =========================================
   tsParticles Background Initialization
========================================= */
tsParticles.load("tsparticles", {
  background: { color: { value: "#0f2027" } },
  fpsLimit: 60,
  interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
  particles: {
    color: { value: "#58C4C6" },
    links: { color: "#58C4C6", distance: 150, enable: true, opacity: 0.2, width: 1 },
    collisions: { enable: false },
    move: { direction: "none", enable: true, outModes: "bounce", random: true, speed: 0.3 },
    number: { density: { enable: true, area: 800 }, value: 40 },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } }
  },
  detectRetina: true
});

/* =========================================
   Project Highlights Single-Item Carousel
========================================= */
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

// Carousel position
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

// Auto-rotate every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);

// Initialize
updateCarousel();

