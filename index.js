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