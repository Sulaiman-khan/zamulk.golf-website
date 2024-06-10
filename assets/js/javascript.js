const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});