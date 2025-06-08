// === 1. Sticky Navbar ===
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 80);
});

// === 2. Fade-in des sections au scroll ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// === 3. Confirmation d’envoi de formulaire ===
document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Merci pour votre message ! On vous répond vite 🙌");
  e.target.reset();
});

/* === Animation de scroll === */
.hidden {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

/* === Sticky Header === */
header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #000;
  border-bottom: 1px solid #222;
}
