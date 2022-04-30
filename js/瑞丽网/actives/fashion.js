document.getElementById("ww").onclick=function(){
    document.documentElement.scrollTop=0
    }
    $(function(){
        $("#qq>div").mouseover(function(){
            $(this).addClass("active").siblings().removeClass("active")
        })
    })
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: 'my-bullet-active',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });