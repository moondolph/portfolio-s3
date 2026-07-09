"use strict";

const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

if (categories && projectsContainer) {
  categories.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    const filter = button.dataset.category;
    handleActiveSelection(button);
    filterProjects(filter);
  });
}

function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active?.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projectsContainer?.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      project.hidden = !(filter === "all" || filter === project.dataset.type);
    });
    projectsContainer?.classList.remove("anim-out");
  }, 160);
}
