
$(document).ready(function () {

    $(".caixas-todas .caixa").click(function () {
      $(this).addClass("activeBox").siblings().removeClass("activeBox")
  
      $(".cards-todos").fadeOut()
      setTimeout(function () {
        $(".cards-todos").fadeIn()
      }, 200)
  
      let value = $(this).attr("data-filter")
      let valueStatus = $(this).attr("data-filterStatus")
  
      setTimeout(function () {
        
          $(".cards-todos .card").not("." + value).hide("150")
          $(".cards-todos .card").filter("." + value).show("150")
  
      }, 100)
    }) 
  
  })