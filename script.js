const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
    menuToggle.focus();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

const heroPortrait = document.querySelector(".hero-portrait");
const pageRamp = document.querySelector(".page-ramp");
const hero = document.querySelector(".hero");

if (heroPortrait && pageRamp && hero) {
  const alignPageRamp = () => {
    const portrait = heroPortrait.getBoundingClientRect();
    const portraitMidpoint = portrait.top + portrait.height * 0.5;
    pageRamp.style.height = `${Math.ceil(portraitMidpoint + window.scrollY)}px`;
  };

  alignPageRamp();
  heroPortrait.addEventListener("load", alignPageRamp, { once: true });
  window.addEventListener("resize", alignPageRamp, { passive: true });

  const rampObserver = new ResizeObserver(alignPageRamp);
  rampObserver.observe(heroPortrait);
  rampObserver.observe(hero);
  document.fonts.ready.then(alignPageRamp);
}
