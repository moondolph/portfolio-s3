"use strict";

export function initProjectFilter() {
  const categories = document.querySelector(".categories");
  const projectsContainer = document.querySelector(".projects");
  if (!categories || !projectsContainer) return;

  categories.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    const filter = button.dataset.category;
    handleActiveSelection(button);
    filterProjects(filter, projectsContainer);
  });
}

function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active?.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter, projectsContainer) {
  const projects = projectsContainer.querySelectorAll(".project");
  projectsContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      project.hidden = !(filter === "all" || filter === project.dataset.type);
    });
    projectsContainer.classList.remove("anim-out");
  }, 160);
}
