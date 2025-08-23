// Yükleme ekranını 2 saniye sonra gizle
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  }, 2000);
});

document.getElementById("itirafForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const text = document.getElementById("itirafText").value.trim();

  if (text.length < 5) {
    document.getElementById("formStatus").innerText = "Lütfen en az 5 karakterlik bir itiraf yazın.";
    document.getElementById("formStatus").style.color = "red";
    return;
  }

  // Geliştirme: burada sunucuya gönderim yapılabilir
  document.getElementById("formStatus").innerText = "Teşekkürler! İtirafın gönderildi.";
  document.getElementById("formStatus").style.color = "green";
  document.getElementById("itirafForm").reset();
});
// Sayfa yüklendiğinde kayıtlı temayı uygula
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme + "-mode");
});

// Butona tıklanınca tema değiştir
document.getElementById("themeToggle").addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  }
});
<link rel="stylesheet" href="style/main.css" />
<script src="js/main.js" defer></script>
// Sayfa yüklendiğinde tema uygula
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme + "-mode");

  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.replace("light-mode", "dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.replace("dark-mode", "light-mode");
      localStorage.setItem("theme", "light");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme + "-mode");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      if (document.body.classList.contains("light-mode")) {
        document.body.classList.replace("light-mode", "dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.replace("dark-mode", "light-mode");
        localStorage.setItem("theme", "light");
      }
    });
  }
});


