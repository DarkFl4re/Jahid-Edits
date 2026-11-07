const card = document.querySelector("#idCard");
const scene = document.querySelector("#scene");
let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

// Smooth 3D tilt follows pointer on desktop; gentle floating motion on mobile.
scene.addEventListener("pointermove", (event) => {
  const rect = scene.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  targetY = x * 18;
  targetX = -y * 12;
});
scene.addEventListener("pointerleave", () => { targetX = 0; targetY = 0; });

function animate() {
  currentX += (targetX - currentX) * 0.06;
  currentY += (targetY - currentY) * 0.06;
  const swing = Math.sin(Date.now() * 0.0008) * 2.2;
  card.style.transform = `rotateX(${3 + currentX}deg) rotateY(${-8 + currentY}deg) rotateZ(${swing}deg)`;
  requestAnimationFrame(animate);
}
animate();

// Simple typewriter effect.
const words = ["Web Developer", "Craftland Creator", "Creative Designer"];
const typed = document.querySelector("#typed");
let wordIndex = 0, charIndex = 0, deleting = false;
function typeLoop() {
  const word = words[wordIndex];
  typed.textContent = word.slice(0, charIndex);
  if (!deleting && charIndex < word.length) charIndex++;
  else if (deleting && charIndex > 0) charIndex--;
  else if (!deleting) deleting = true;
  else { deleting = false; wordIndex = (wordIndex + 1) % words.length; }
  setTimeout(typeLoop, deleting ? 55 : 105);
}
typeLoop();

// The QR graphic is decorative. Replace it with a real QR image for your profile URL.
document.querySelector("#menuBtn").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#soundBtn").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active");
  e.currentTarget.textContent = e.currentTarget.classList.contains("active") ? "◖×" : "◖))";
});