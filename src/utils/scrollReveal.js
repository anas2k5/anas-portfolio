import ScrollReveal from "scrollreveal";

export function initReveal() {
  if (typeof window === "undefined") return;

  const sr = ScrollReveal({
    distance: "30px",
    duration: 600,
    easing: "ease-out",
    reset: false,
  });

  sr.reveal(".reveal", {
    origin: "bottom",
    interval: 120,
    viewFactor: 0.1,
  });

  // Fallback for no-SR mode
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach(el => {
      el.classList.add("show");
    });
  }, 200);
}
