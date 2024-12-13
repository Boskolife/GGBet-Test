initBurger();

function initBurger() {
  const burger = document.querySelector('.header_burger');
  const headerMenu = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    headerMenu.classList.toggle('menu_active');
    document.body.classList.toggle('body_lock');
  });
}

if (window.innerWidth > 1024) {
  document.addEventListener('mousemove', parallaxEffect);
}

let xOffset = 0,
  yOffset = 0;

function parallaxEffect(event) {
  const layers = document.querySelectorAll('.parallax_img');
  const { clientX: mouseX, clientY: mouseY } = event;

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.01;
    xOffset = (window.innerWidth / 1 - mouseX) * speed;
    yOffset = (window.innerHeight / 1 - mouseY) * speed;

    layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });

  requestAnimationFrame(() => parallaxEffect(event));
}

const swiper = new Swiper('.news_swiper', {
  slidesPerView: 2,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
