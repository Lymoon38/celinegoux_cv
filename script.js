// script.js

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  let isLight = false;

  toggle.addEventListener("click", () => {
    isLight = !isLight;
    body.classList.toggle("light-mode", isLight);
    toggle.textContent = isLight ? "🌙 Mode sombre" : "☀️ Mode clair";
  });

  // Animation d'apparition douce
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }, 200 * index);
  });
});
