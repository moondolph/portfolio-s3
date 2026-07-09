export function initHomeFade() {
  const homeContainer = document.querySelector(".hero__container") || document.querySelector(".home__container");
  const home = document.querySelector("#home");
  if (!homeContainer || !home) return;

  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    const opacity = Math.max(0.35, 1 - window.scrollY / homeHeight);
    homeContainer.style.opacity = String(opacity);
  });
}

export function initArrowUp() {
  const home = document.querySelector("#home");
  const arrowUp = document.querySelector(".arrow-up");
  if (!home || !arrowUp) return;

  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    arrowUp.classList.toggle("visible", window.scrollY > homeHeight / 2);
  });
}
