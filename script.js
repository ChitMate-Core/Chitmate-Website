const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('waitlist-form');
form?.addEventListener('submit', e => {
  const hostedOnNetlify = location.hostname.includes('netlify.app');
  const isPreview = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);
  if (!hostedOnNetlify && isPreview) {
    e.preventDefault();
    const message = document.getElementById('form-message');
    message.textContent = 'Preview mode: connect this form to Netlify Forms, Formspree, or your backend before launch.';
  }
});
