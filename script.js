document.addEventListener("DOMContentLoaded", () => {
  console.log("KOSANA script loaded");

  const btn = document.getElementById("themeToggle");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });
});
