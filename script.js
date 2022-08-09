$("p").mouseenter(function(){
    $(this).hide();
})

$(".menu").click(function(){
    $(this).find(".menu").toggleClass("active");
    $(this).siblings(".toggle").find(".menu").removeClass("active");
  });

const modal = document.querySelector("modal");
const previews = document.querySelectorALL(".img");
const original  = document.querySelector(".full-img");