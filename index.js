'use strict';

import translate from './translate.js';

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

// перевод страницы

const rus = document.querySelector('.rus');
const eng = document.querySelector('.eng');
const content = document.querySelectorAll('[data-i18n]');

function getTranslate(lang) {
  content.forEach((element) => {
    element.textContent = translate[lang][element.dataset.i18n];
  });
}

rus.addEventListener('click', () => {
  getTranslate('rus');
  eng.classList.remove('active');
  rus.classList.add('active');
});
eng.addEventListener('click', () => {
  getTranslate('eng');
  rus.classList.remove('active');
  eng.classList.add('active');
});

// сохранить выбранный язык в local storage

let lang;

function getLocalStorage() {
    lang = localStorage.getItem('lang' || 'eng');
    getTranslate(lang);
}
window.addEventListener('load', getLocalStorage);


function setLocalStorage() {
  if (rus.classList.contains('active')) {
    lang = 'rus';
  } else {
    lang = 'eng';
  }
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);
