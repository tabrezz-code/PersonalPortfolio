const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("section[id]")];

menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", () => sidebar.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + visible.target.id);
  });
}, {rootMargin: "-30% 0px -55% 0px", threshold: [0, .2, .5]});

sections.forEach(section => observer.observe(section));
