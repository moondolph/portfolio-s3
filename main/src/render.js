"use strict";
// Builds the Experience / Skills / Certifications / Projects sections from src/data.js.
// Runs once on initial load, before applyI18n() — every text node it creates carries
// data-i18n so later language switches are handled by the existing i18n engine.

import { EXPERIENCE, SKILLS, CERTS, PROJECTS, PROJECT_CATEGORIES } from "./data.js";
import { initProjectFilter } from "./projects.js";

const CATEGORY_LABELS = { all: "All", cloud: "Cloud", ops: "Operations", ai: "AI", fullstack: "Full Stack" };

function tagChip(tag) {
  if (typeof tag === "string") return `<span class="tag">${tag}</span>`;
  const levelKey = tag.level === "learning" ? "skills.badge.learning" : "skills.badge.exploring";
  return `<span class="tag tag--${tag.level}">${tag.name} <small data-i18n="${levelKey}"></small></span>`;
}

function renderCareer() {
  const container = document.querySelector("#career .timeline");
  if (!container) return;
  container.innerHTML = EXPERIENCE.map(
    (item) => `
    <article class="timeline__item">
      <div class="timeline__marker"></div>
      <div class="timeline__content">
        <div class="timeline__meta">${item.start} - ${item.end} · <span data-i18n="${item.metaKey}"></span></div>
        <h3 data-i18n="${item.titleKey}"></h3>
        <p data-i18n="${item.descKey}"></p>
        <div class="capability__tags">${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </article>`
  ).join("");
}

function renderSkills() {
  const container = document.querySelector("#skills .capabilities");
  if (!container) return;
  // Groups are pre-ordered in data.js: "core" (Cloud/Infrastructure/DevOps — the main identity)
  // before "additional" (Development/AI — supporting capabilities). Print a section label the
  // first time a section changes so the priority reads clearly without a layout rework.
  let lastSection = null;
  container.innerHTML = SKILLS.map((group) => {
    const label =
      group.section !== lastSection
        ? `<div class="capabilities__label" data-i18n="skills.section.${group.section}"></div>`
        : "";
    lastSection = group.section;
    return `${label}
    <section class="capability">
      <h3 class="capability__title"><i class="${group.icon}"></i> <span data-i18n="skills.${group.id}.title"></span></h3>
      <p class="capability__desc" data-i18n="${group.descKey}"></p>
      <div class="capability__tags">${group.tags.map(tagChip).join("")}</div>
    </section>`;
  }).join("");
}

function renderCertifications() {
  const container = document.querySelector("#certificates .cert-grid");
  if (!container) return;
  container.innerHTML = CERTS.map(
    (cert) => `
    <article class="cert-card">
      <img class="cert-card__badge" src="images/badges/${cert.badge}" alt="" loading="lazy" />
      <h3 data-i18n="${cert.nameKey}"></h3>
      <p data-i18n="${cert.descKey}"></p>
    </article>`
  ).join("");
}

function visualClass(variant) {
  return `project__visual--${variant}`;
}

function renderProjectActions(project) {
  const actions = [];
  if (project.liveUrl) {
    actions.push(
      `<a class="btn btn--small btn--primary" href="${project.liveUrl}" target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="project.action.live"></span></a>`
    );
  }
  (project.liveUrls || []).forEach((link) => {
    actions.push(
      `<a class="btn btn--small btn--primary" href="${link.url}" target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="project.action.live"></span> · ${link.label}</a>`
    );
  });
  if (project.githubUrl) {
    const privateAttr = project.githubPrivate ? ` data-i18n-attr="title:project.label.privateRepoNote"` : "";
    actions.push(
      `<a class="btn btn--small" href="${project.githubUrl}" target="_blank" rel="noreferrer noopener"${privateAttr}><i class="fa-brands fa-github"></i> GitHub</a>`
    );
  }
  if (project.architectureUrl) {
    actions.push(
      `<a class="btn btn--small ${project.liveUrl ? "" : "btn--primary"}" href="${project.architectureUrl}" target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-diagram-project"></i> <span data-i18n="project.action.architecture"></span></a>`
    );
  }
  return actions.join("");
}

function renderProjectBody(project) {
  if (project.status === "planned") {
    return `
      <p class="project__desc" data-i18n="${project.summaryKey}"></p>
      <p class="project__planned-note" data-i18n="project.label.plannedNote"></p>
      <div class="project__field-label" data-i18n="project.label.stack"></div>
      <div class="capability__tags">${project.techStack.map((t) => `<span class="tag">${t}</span>`).join("")}</div>`;
  }
  const resultRow = project.resultsKey
    ? `<dt data-i18n="project.label.result"></dt><dd data-i18n="${project.resultsKey}"></dd>`
    : `<dt data-i18n="project.label.result"></dt><dd class="project__pending-note" data-i18n="project.label.inProgressNote"></dd>`;
  return `
      <dl class="project__facts">
        <dt data-i18n="project.label.problem"></dt>
        <dd data-i18n="${project.problemKey}"></dd>
        <dt data-i18n="project.label.role"></dt>
        <dd data-i18n="${project.roleKey}"></dd>
        <dt data-i18n="project.label.solution"></dt>
        <dd data-i18n="${project.solutionKey}"></dd>
        ${resultRow}
      </dl>
      <div class="project__field-label" data-i18n="project.label.stack"></div>
      <div class="capability__tags">${project.techStack.map((t) => `<span class="tag">${t}</span>`).join("")}</div>`;
}

function renderProjects() {
  const container = document.querySelector("#projects .projects");
  const categoriesEl = document.querySelector("#projects .categories");
  if (!container || !categoriesEl) return;

  categoriesEl.innerHTML = PROJECT_CATEGORIES.map((cat, i) => {
    const count = cat === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
    return `<li><button class="category${i === 0 ? " category--selected" : ""}" data-category="${cat}">${CATEGORY_LABELS[cat]}<span class="category__count">${count}</span></button></li>`;
  }).join("");

  container.innerHTML = PROJECTS.map(
    (project) => `
    <article class="project card" data-type="${project.category}">
      <div class="project__visual ${visualClass(project.visual.variant)}">${project.visual.chips.map((c) => `<span>${c}</span>`).join("")}</div>
      <div class="project__metadata">
        <div class="project__eyebrow">
          <span data-i18n="${project.subtitleKey}"></span> · <span class="badge badge--${project.status}" data-i18n="project.status.${project.status}"></span>
        </div>
        <h3 class="project__title" data-i18n="${project.titleKey}"></h3>
        ${renderProjectBody(project)}
        <div class="project__actions">${renderProjectActions(project)}</div>
      </div>
    </article>`
  ).join("");
}

export function renderDynamicSections() {
  renderCareer();
  renderSkills();
  renderCertifications();
  renderProjects();
  initProjectFilter();
}
