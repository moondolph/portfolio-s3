const sectionIds = ["#home", "#about", "#career", "#skills", "#certificates", "#projects", "#contact"];
const sections = sectionIds.map((id) => document.querySelector(id)).filter(Boolean);
const navItems = sectionIds.map((id) => document.querySelector(`.header__menu [href="${id}"]`));
let activeNavItem = null;

const TRIGGER_RATIO = 0.35;

function updateActiveSection() {
  const triggerY = window.scrollY + window.innerHeight * TRIGGER_RATIO;
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

  let activeIndex = 0;
  if (atBottom) {
    activeIndex = sections.length - 1;
  } else {
    sections.forEach((section, index) => {
      if (section.offsetTop <= triggerY) activeIndex = index;
    });
  }
  selectNavItem(activeIndex);
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem || navItem === activeNavItem) return;
  activeNavItem?.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateActiveSection();
    ticking = false;
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
updateActiveSection();
