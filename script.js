const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if(top < height - 100){
      el.classList.add("active");
    }
  });
});

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
});

window.addEventListener("scroll", reveal);

function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}