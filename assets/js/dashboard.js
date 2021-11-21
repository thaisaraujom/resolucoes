$('.add-carrocel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var hide = document.querySelector(".filtro")
hide.addEventListener("click", function(){
    var navbar__wrap = document.querySelector("#popup-dos-filtros");
    navbar__wrap.classList.toggle("hide")
})


var hide2 = document.querySelector(".sino-not")
hide2.addEventListener("click", function(){
    var navbar__wrap = document.querySelector("#popup-das-notificacoes");
    navbar__wrap.classList.toggle("hide2")
})

