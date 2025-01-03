// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button when the user scrolls
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Smooth scroll to the top
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Create the glowing effect element
const glowEffect = document.createElement('div');
glowEffect.classList.add('glow-effect');
document.body.appendChild(glowEffect);

// Track the mouse position and update the glowing effect's position
document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  
  glowEffect.style.left = `${mouseX}px`;
  glowEffect.style.top = `${mouseY}px`;
});

