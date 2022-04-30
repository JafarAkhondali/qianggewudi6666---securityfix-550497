window.onscroll=function(){
  document.documentElement.scrollTop>1200?document.querySelector(".ss").style.display="block":document.querySelector(".ss").style.display="none"
}
document.querySelector(".ss").onclick=function(){
document.documentElement.scrollTop=0
}
$(function(){
  $(".rr3").click(function(){
    $(this).css("background","url('../imgs/shop/21.jpg')")
    $(this).css("background","url('../imgs/shop/21.jpg')")
    var a=$(".rrr").html()
    $(".rrr").html(parseInt(a)+1)
  })
  $(".rrr3").click(function(){
    $(this).css("background","url('../imgs/shop/21.jpg')")
    $(this).css("background","url('../imgs/shop/21.jpg')")
    var a=$(".rrrr").html()
    $(".rrrr").html(parseInt(a)+1)
  })
  $(".rrrr3").click(function(){
    $(this).css("background","url('../imgs/shop/21.jpg')")
    $(this).css("background","url('../imgs/shop/21.jpg')")
    var a=$(".rrrrr").html()
    $(".rrrrr").html(parseInt(a)+1)
  })
})
var swiper = new Swiper(".a", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
      bulletClass : 'swiper-pagination-bullet',
      bulletActiveClass: 'my-bullet-active',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
