// Yükleme ekranını 2 saniye sonra gizle
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  }, 2000);
});

// İtiraf formu gönderimi
document.getElementById("itirafForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const itirafMetni = document.getElementById("itirafText").value.trim();

  if (itirafMetni.length < 5) {
    const status = document.getElementById("formStatus");
    status.innerText = "Lütfen en az 5 karakterlik bir itiraf yazın.";
    status.style.color = "red";
    return;
  }

  // Örnek fetch isteği
  fetch("https://ngl.link/itiraf.018", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mesaj: itirafMetni }),
  })
    .then((res) => res.json())
    .then((data) => {
      const status = document.getElementById("formStatus");
      status.innerText = "Teşekkürler! İtirafın gönderildi.";
      status.style.color = "green";
      this.reset();
      console.log("Başarılı gönderim:", data);
    })
    .catch((err) => {
      const status = document.getElementById("formStatus");
      status.innerText = "Gönderim sırasında hata oluştu.";
      status.style.color = "red";
      console.error("Hata:", err);
    });
});

// Tema değiştirici
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme + "-mode");

  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.replace("light-mode", "dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.replace("dark-mode", "light-mode");
      localStorage.setItem("theme", "light");
    }
  });
});
