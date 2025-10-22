document.getElementById('cta').addEventListener('click', () => {
  alert('Danke! NovaPlan-Demo wird bald verfügbar sein.');
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.boxShadow = window.scrollY > 50 ? '0 3px 8px rgba(0,0,0,0.2)' : 'none';
});
