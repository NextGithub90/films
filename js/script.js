document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-out-cubic",
  });

  // Console greeting
  console.log("Nana Bayek Portfolio Loaded Successfully");

  // Initialize Particles
  createParticles();
});

function createParticles() {
  const particlesContainer = document.createElement("div");
  particlesContainer.id = "particles-container";
  document.body.prepend(particlesContainer);

  const symbols = ["♪", "♫", "♩", "♬", "♭", "♮", "♯", "✨", "★"];
  const particleCount = 20;

  // Create initial batch
  for (let i = 0; i < particleCount; i++) {
    spawnParticle(particlesContainer, symbols, true);
  }

  // Continuously spawn new particles
  setInterval(() => {
    spawnParticle(particlesContainer, symbols);
  }, 1000);
}

function spawnParticle(container, symbols, initial = false) {
  const particle = document.createElement("span");
  particle.className = "particle";
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  // Random positioning
  const startX = Math.random() * 100;

  // Random animation duration and delay
  const duration = Math.random() * 5 + 5; // 5 to 10 seconds
  const delay = initial ? Math.random() * -10 : Math.random() * 5;

  particle.style.left = startX + "vw";
  particle.style.animationDuration = duration + "s";
  particle.style.animationDelay = delay + "s";
  particle.style.opacity = Math.random() * 0.5 + 0.2;
  particle.style.fontSize = Math.random() * 1.5 + 0.5 + "rem";

  // Random drift
  // We can't easily do random keyframes in vanilla JS without inserting style rules,
  // but we can set random rotation start
  particle.style.transform = `rotate(${Math.random() * 360}deg)`;

  container.appendChild(particle);

  // Remove particle after animation ends to prevent DOM bloat
  setTimeout(() => {
    particle.remove();
  }, (duration + (initial ? 0 : delay)) * 1000 + 100);
}
