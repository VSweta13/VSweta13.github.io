// =====================================
// 1. Skills Progress Bar Animation
// =====================================
const skillsSection = document.querySelector(".skills-section");
const progressBars = document.querySelectorAll(".progress");

let animated = false; // Make sure animation runs only once

// Listen for scroll event
window.addEventListener("scroll", () => {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // When skills section becomes visible
  if (sectionTop < screenHeight - 100 && !animated) {
    progressBars.forEach((bar) => {
      const progressValue =
        getComputedStyle(bar).getPropertyValue("--progress");
      bar.style.width = progressValue;
    });
    animated = true; // Prevent re-running the animation
  }
});

// =====================================
// 2. Scroll Reveal Animations
// =====================================
const animatedElements = document.querySelectorAll(
  ".fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .zoom-in, .flip-in, .blur-in, .pop-in"
);

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =====================================
// 3. Card Flip on Mobile (Tap to flip)
// =====================================
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    // Toggle flip on tap
    card.classList.toggle("flip");
  });
});
