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
