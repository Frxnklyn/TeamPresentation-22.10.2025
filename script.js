document.getElementById('cta').addEventListener('click', () => {
  alert('Thank you! NovaPlan demo will be available soon.');
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.boxShadow = window.scrollY > 50 ? '0 3px 8px rgba(0,0,0,0.2)' : 'none';
});
