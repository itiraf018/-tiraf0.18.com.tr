// Sayfa tamamen yüklendiğinde loader'ı gizle
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});

// Alt butonlara tıklanınca sayfada yumuşak kaydırma yap
document.addEventListener('DOMContentLoaded', function () {
  const scrollButtons = document.querySelectorAll('.bottom-buttons button');

  scrollButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// (Opsiyonel) Gelecekte genişletmek için bir örnek fonksiyon
function showToast(message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '80px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = '#333';
  toast.style.color = '#fff';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '6px';
  toast.style.zIndex = '10000';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s';

  document.body.appendChild(toast);

  setTimeout(() => { toast.style.opacity = '1'; }, 100);
  setTimeout(() => { toast.style.opacity = '0'; }, 3000);
  setTimeout(() => { toast.remove(); }, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('etkinlikTarihiForm');
  const gosterim = document.getElementById('secilenTarihGosterimi');

  // Sayfa yüklendiğinde localStorage'dan tarih alınıp gösteriliyor
  const storedDate = localStorage.getItem('secilenTarih');
  if (storedDate) {
    const [yil, ay, gun] = storedDate.split("-");
    gosterim.innerHTML = `Seçilen Tarih: ${gun}.${ay}.${yil}`;
  }

  if (form && gosterim) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const secilenTarih = document.getElementById('tarih').value;

      if (secilenTarih) {
        // Tarih formatını YYYY-MM-DD olarak saklıyoruz
        localStorage.setItem('secilenTarih', secilenTarih);

        const [yil, ay, gun] = secilenTarih.split("-");
        gosterim.innerHTML = `Seçilen Tarih: ${gun}.${ay}.${yil}`;
      }
    });
  }
});
