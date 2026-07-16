export function initArrowUp() {
  const home = document.querySelector("#home");
  const arrowUp = document.querySelector(".arrow-up");
  if (!home || !arrowUp) return;

  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    arrowUp.classList.toggle("visible", window.scrollY > homeHeight / 2);
  });
}
