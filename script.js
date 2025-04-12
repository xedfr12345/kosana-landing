document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    const btn = document.getElementById("theme-toggle");
    const title = document.getElementById("title");

    if (document.body.classList.contains("dark-theme")) {
      btn.textContent = "☀️ Верни свет";
      title.textContent = "Тёмная сторона активна...";
    } else {
      btn.textContent = "🌙 Тыкни меня";
      title.textContent = "Добро пожаловать, KOSANA";
    }
  });
