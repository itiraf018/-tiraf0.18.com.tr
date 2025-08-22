// Yükleme ekranını 2 saniye sonra gizle
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  }, 2000);
});
