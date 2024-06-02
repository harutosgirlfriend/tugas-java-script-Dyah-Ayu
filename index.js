let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".ygada", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:1500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  