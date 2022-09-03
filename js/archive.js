const toggle = document.querySelector(".nav-toggler");

toggle.addEventListener("click", navToggle);

function navToggle() {
    toggle.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
        nav.removeAttribute("style");
    }
}


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});