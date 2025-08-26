// Sayfa tamamen yüklendiğinde loader varsa gizle
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  // Butonlarla yumuşak kaydırma
  document.querySelectorAll('.bottom-buttons button').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Tarih seçimi
  const form = document.getElementById('etkinlikTarihiForm');
  const display = document.getElementById('secilenTarihGosterimi');
  const counter = document.getElementById('tarihSayac');

  let count = parseInt(localStorage.getItem('tarihSecimSayac')) || 0;
  counter.textContent = `Toplam seçim sayısı: ${count}`;

  const saved = localStorage.getItem('secilenTarih');
  if (saved) display.textContent = `Seçilen Tarih: ${saved}`;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const date = document.getElementById('tarih').value;
    if (date) {
      const [y, m, d] = date.split("-");
      const formatted = `${d}.${m}.${y}`;
      display.textContent = `Seçilen Tarih: ${formatted}`;
      localStorage.setItem('secilenTarih', formatted);

      count++;
      localStorage.setItem('tarihSecimSayac', count);
      counter.textContent = `Toplam seçim sayısı: ${count}`;
    }
  });
});
