// Scroll-to-up button

const scrollToTop = document.getElementById('scroll-to-top');
let datashow = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 50 && !datashow) {
    scrollToTop.setAttribute ('data-show', 'true');
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
    })
  });
})

// Menu-hamburger

const iconHamburger = document.querySelector(".hamburger-icon");
const hamburgerBody = document.querySelector(".hamburger-content");
if (iconHamburger) {
  iconHamburger.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconHamburger.classList.toggle("_open");
    hamburgerBody.classList.toggle("_open");
  });
}

function closeMenu(event) {
  // функция закрытия
  if (event.target.classList.contains("nav-link__hamburger")) {
    // если место, по кот.кликнули, сод.ссылку
    document.body.classList.remove("_lock");
    iconHamburger.classList.remove("_open");
    hamburgerBody.classList.remove("_open");
  }
}
hamburgerBody.addEventListener("click", closeMenu); // при клике на тело меню  - функция закрытия

