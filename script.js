/* =========================================
   Intro Animation
========================================= */

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");          
  const introTitle = document.getElementById("intro-title"); 
  const heroTitle = document.getElementById("hero-title");  

  const text = "Welcome to Klara's Portfolio. ";          
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      introTitle.textContent += text.charAt(i);        
      i++;
      setTimeout(typeWriter, 150);                       
    } else {
      setTimeout(() => {
        intro.style.transition = "opacity 0.8s ease";
        intro.style.opacity = 0;                         

        setTimeout(() => {
          intro.style.display = "none";                 
          heroTitle.style.opacity = 1;                   
        }, 800);
      }, 800); 
    }
  }

  typeWriter();
});

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

  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });

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
    card.style.transform = "translateY(-5px) scale(1.02)";         
    card.style.boxShadow = "0 10px 25px rgba(88,196,198,0.25)";     
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";                
    card.style.boxShadow = "0 0 0 rgba(0,0,0,0)";                  
  });

});


/* =========================================
   Project Highlights Carousel
========================================= */
const track = document.querySelector('.carousel-track');  
const items = Array.from(track.children);                 
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0; 

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);

updateCarousel();