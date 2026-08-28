"use strict";

/* ==========================================================================
   NESIC Career Story Page — page script.
   Minimal vanilla JavaScript. No dependencies, no build step.
     1. Subtle solid header once the page is scrolled.
     2. Mobile navigation toggle.
     3. Scroll-reveal for elements marked with .reveal (IntersectionObserver).
   ========================================================================== */

(function () {
  /* ----------------------------------------------------------------------
     1. Header: add .is-scrolled after a small scroll distance.
     ---------------------------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ----------------------------------------------------------------------
     2. Mobile navigation toggle.
     ---------------------------------------------------------------------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    const closeMenu = () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after tapping a link.
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close the menu when the viewport grows back to desktop width.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  /* ----------------------------------------------------------------------
     3. Scroll reveal. Falls back to "just show everything" when
        IntersectionObserver is unavailable or motion is reduced.
     ---------------------------------------------------------------------- */
  const revealables = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealables.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  revealables.forEach((el) => observer.observe(el));
})();
