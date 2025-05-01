// script.js
// Header shrink on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.timeline()
  .from('#hero h1', { y: 80, opacity: 0, duration: 1, ease: 'power2.out' })
  .from('#hero .subtitle', { y: 50, opacity: 0, duration: 1 }, '-=0.6')
  .from('#hero .cta', { scale: 0.8, opacity: 0, duration: 1 }, '-=0.6');

// About section
gsap.from('#about .text', {
  scrollTrigger: { trigger: '#about', start: 'top 80%' },
  x: -100, opacity: 0, duration: 1
});
gsap.from('#about .image', {
  scrollTrigger: { trigger: '#about', start: 'top 80%' },
  x: 100, opacity: 0, duration: 1
});

// Statistics count-up
document.querySelectorAll('#statistic h1').forEach(el => {
  const end = parseInt(el.getAttribute('data-target'));
  gsap.fromTo(el, { innerText: 0 }, {
    innerText: end,
    duration: 2,
    scrollTrigger: { trigger: '#statistic', start: 'top 80%' },
    snap: { innerText: 1 },
    onUpdate: () => el.textContent = Math.ceil(el.innerText) + (el.getAttribute('data-target').includes('+') ? '+' : '')
  });
});

// Key Services cards
gsap.from('#key-services .info-card', {
  scrollTrigger: { trigger: '#key-services', start: 'top 80%' },
  scale: 0.8, opacity: 0, stagger: 0.15, duration: 1
});

// Our Services cards
gsap.from('#our-services .custom-card', {
  scrollTrigger: { trigger: '#our-services', start: 'top 80%' },
  scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
});

// Service Benefits
gsap.from('#benefits .benefit-card', {
  scrollTrigger: { trigger: '#benefits', start: 'top 80%' },
  x: 100, opacity: 0, stagger: 0.2, duration: 1
});

// Testimonials
gsap.from('#testimonials .testimonial', {
  scrollTrigger: { trigger: '#testimonials', start: 'top 80%' },
  scale: 0.9, opacity: 0, duration: 1
});
gsap.from('#testimonials .client-logos img', {
  scrollTrigger: { trigger: '#testimonials', start: 'top 80%' },
  x: -50, opacity: 0, stagger: 0.2, duration: 1
});

// Clientle logos
gsap.from('#clientle img', {
  scrollTrigger: { trigger: '#clientle', start: 'top 80%' },
  scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
});

// UPI Switch images
gsap.from('#upi-switch .media-gif', {
  scrollTrigger: { trigger: '#upi-switch', start: 'top 80%' },
  scale: 0.8, opacity: 0, duration: 1
});
gsap.from('#upi-switch .bottom-right-icon', {
  scrollTrigger: { trigger: '#upi-switch', start: 'top 80%' },
  y: 50, opacity: 0, duration: 1
});

// Contact form fields
gsap.from('#contact input, #contact textarea, #contact .btn-submit', {
  scrollTrigger: { trigger: '#contact', start: 'top 80%' },
  y: 30, opacity: 0, stagger: 0.2, duration: 1
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
