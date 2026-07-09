export function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const headerHeight = header.getBoundingClientRect().height;
  const navbarMenu = document.querySelector(".header__menu");
  const navbarToggle = document.querySelector(".header__toggle");

  document.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  });

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => {
      navbarMenu.classList.toggle("open");
    });

    navbarMenu.addEventListener("click", () => {
      navbarMenu.classList.remove("open");
    });
  }
}

