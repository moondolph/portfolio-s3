const sectionIds = ["#home", "#about", "#career", "#skills", "#certificates", "#projects", "#contact"];
const sections = sectionIds.map((id) => document.querySelector(id)).filter(Boolean);
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems.find(Boolean);

const options = {
  rootMargin: "-25% 0px -55% 0px",
  threshold: [0, 0.2, 0.6],
};

const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    if (index >= 0) visibleSections[index] = entry.isIntersecting;
  });

  const activeIndex = visibleSections.findIndex(Boolean);
  selectNavItem(activeIndex >= 0 ? activeIndex : 0);
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem?.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
