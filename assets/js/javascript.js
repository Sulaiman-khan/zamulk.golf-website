const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  var pricingCardHeads = document.querySelectorAll('.pricing__card-head');
  pricingCardHeads.forEach(function(head) {
      head.addEventListener('click', function() {
          var pricingCardBody = head.nextElementSibling;
          if (pricingCardBody.style.display === 'none' || pricingCardBody.style.display === '') {
              pricingCardBody.style.display = 'block';
          } else {
              pricingCardBody.style.display = 'none';
          }
      });
  });
});


var swiper = new Swiper(".myCity", {
  autoplay:true,
  loop:true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


var swiper = new Swiper(".myBrochure", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});