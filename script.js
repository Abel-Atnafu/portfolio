document.getElementById("yr").textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

const skills = document.getElementById("skills");
let barsDone = false;
const barIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting || barsDone) return;
    barsDone = true;
    document.querySelectorAll(".bar").forEach((bar, i) => {
      const pct = Number(bar.getAttribute("data-pct") || "0");
      const fill = bar.querySelector(".fill");
      setTimeout(() => { fill.style.width = pct + "%"; }, i * 140);
    });
  });
}, { threshold: 0.25 });
if (skills) barIO.observe(skills);

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("[data-nav]");
menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});
nav?.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});