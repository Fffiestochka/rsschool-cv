'use strict';
// Scroll-to-up button

const scrollToTop = document.getElementById('scroll-to-top');
let datashow = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 50 && !datashow) {
    scrollToTop.setAttribute('data-show', 'true');
    datashow = true;
  }

  if (window.scrollY < 50 && datashow) {
    scrollToTop.setAttribute('data-show', 'false');
    datashow = false;
  }

  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behaviar: 'smooth',
    });
  });
});

// Menu-hamburger

const hamburger = document.querySelector('.hamburger-icon');
const navBody = document.querySelector('.nav-list');
const div = document.createElement('div');
const overlay = document.createElement('div');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navBody.classList.toggle('open');
  document.body.classList.toggle('lock');
  overlay.classList.toggle('overlay');
  document.body.append(overlay);
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


function closeMenu() {
  hamburger.classList.remove('open');
  navBody.classList.remove('open');
  document.body.classList.remove('lock');
  overlay.classList.remove('overlay');
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
overlay.addEventListener('click', closeMenu);
