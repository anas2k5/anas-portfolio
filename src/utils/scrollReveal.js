import ScrollReveal from "scrollreveal";

export function initReveal() {
  const sr = ScrollReveal({
    distance: "30px",
    duration: 700,
    easing: "cubic-bezier(.2,.8,.2,1)",
    reset: false,
    scale: 1,
    mobile: true,
  });

  sr.reveal(".hero", { origin: "bottom", interval: 80, delay: 100, viewFactor: 0.1 });
  sr.reveal(".skills-section, .education-section", { origin: "bottom", delay: 120 });
  sr.reveal(".experience-section .exp-card, .projects-section .project-card", { origin: "bottom", interval: 80 });
  sr.reveal(".contact-section .glass", { origin: "bottom", delay: 120 });

  // For manual show class fallback (works if scrollreveal not loaded)
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("show"));
    }, 200);
  });
}
