gsap.registerPlugin(ScrollTrigger);

// Navbar shrink on scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Hero Animations
gsap.from("#hero h1", { y: 50, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from("#hero .subtitle", { y: 30, opacity: 0, duration: 1, delay: 0.3 });
gsap.from("#hero .cta", { scale: 0.8, opacity: 0, duration: 1, delay: 0.6 });

// About Section
gsap.from("#about-hero .text", {
  scrollTrigger: { trigger: "#about-hero", start: "top 80%" },
  x: -100, opacity: 0, duration: 1
});
gsap.from("#about-hero .image", {
  scrollTrigger: { trigger: "#about-hero", start: "top 80%" },
  x: 100, opacity: 0, duration: 1
});

// Statistics Count-Up
document.querySelectorAll("#statistic .display-4").forEach(el => {
  const end = el.getAttribute('data-target');
  gsap.fromTo(el, { innerText: 0 }, {
    innerText: parseFloat(end),
    duration: 2,
    scrollTrigger: { trigger: "#statistic", start: "top 80%" },
    snap: { innerText: 1 },
    onUpdate: () => {
      el.textContent = el.innerText.toLocaleString();
    }
  });
});

// Key Services
gsap.from("#key-services .info-card", {
  scrollTrigger: { trigger: "#key-services", start: "top 80%" },
  scale: 0.8, opacity: 0, stagger: 0.15, duration: 1
});

// Our Services Cards
gsap.from("#our-services .custom-card", {
  scrollTrigger: { trigger: "#our-services", start: "top 80%" },
  scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
});

// Service Benefits
gsap.from("#our-services .info-card", {
  scrollTrigger: { trigger: "#our-services", start: "top 60%" },
  x: 100, opacity: 0, stagger: 0.2, duration: 1
});

// Testimonials & Logos
gsap.from("#testimonials .testimonial", {
  scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
  scale: 0.9, opacity: 0, duration: 1
});
gsap.from("#testimonials .client-logos img", {
  scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
  x: -50, opacity: 0, stagger: 0.2, duration: 1
});

// Clientle Logos
gsap.from("#clientle img", {
  scrollTrigger: { trigger: "#clientle", start: "top 80%" },
  scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
});

// UPI Switch
gsap.from("#upi-switch .media-gif", {
  scrollTrigger: { trigger: "#upi-switch", start: "top 80%" },
  scale: 0.8, opacity: 0, duration: 1
});
gsap.from("#upi-switch .bottom-right-icon", {
  scrollTrigger: { trigger: "#upi-switch", start: "top 80%" },
  y: 50, opacity: 0, duration: 1
});

// Contact Form & Image
gsap.from("#contact input, #contact textarea, #contact button, #contact h2", {
  scrollTrigger: { trigger: "#contact", start: "top 80%" },
  y: 30, opacity: 0, stagger: 0.2, duration: 1
});
