// Sayfa tamamen yüklendiğinde loader'ı gizle
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});

// Alt butonlara tıklayınca sayfada yumuşak kaydırma yap
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.bottom-buttons button').forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// (Opsiyonel) Gelecekte genişletmek için toast fonksiyonu
function showToast(message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '6px',
    zIndex: '10000',
    opacity: '0',
    transition: 'opacity 0.3s'
  });
  document.body.appendChild(toast);
  setTimeout(() => toast.style.opacity = '1', 100);
  setTimeout(() => toast.style.opacity = '0', 3000);
  setTimeout(() => toast.remove(), 3500);
}

// Fotoğraf Savaşları tarih seçimini kalıcı yap + sayacını göster
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('etkinlikTarihiForm');
  const gosterim = document.getElementById('secilenTarihGosterimi');
  const sayacEl = document.getElementById('tarihSayac');

  // Lokal seçim sayacını getir
  let sayac = parseInt(localStorage.getItem('tarihSecimSayac')) || 0;
  sayacEl.textContent = `Bu sayfada toplam seçim sayısı: ${sayac}`;

  // Sayfa yüklendiğinde, daha önce seçilmiş tarihi göster
  const savedDate = localStorage.getItem('secilenTarih');
  if (savedDate) gosterim.innerHTML = `Seçilen Tarih: ${savedDate}`;

  if (form && gosterim) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const secilenTarih = document.getElementById('tarih').value;
      if (secilenTarih) {
        const [yil, ay, gun] = secilenTarih.split("-");
        const formattedDate = `${gun}.${ay}.${yil}`;
        // Tarih gösterimi
        gosterim.innerHTML = `Seçilen Tarih: ${formattedDate}`;
        localStorage.setItem('secilenTarih', formattedDate);

        // Sayaç arttır ve göster
        sayac++;
        localStorage.setItem('tarihSecimSayac', sayac);
        sayacEl.textContent = `Bu sayfada toplam seçim sayısı: ${sayac}`;
      }
    });
  }
});
