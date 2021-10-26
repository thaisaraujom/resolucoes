
$(document).ready(function () {

    $(".menu-materia .materia").click(function () {
      $(this).addClass("active").siblings().removeClass("active")
  
      $(".cards-monitores").fadeOut()
      setTimeout(function () {
        $(".cards-monitores").fadeIn()
      }, 10)
  
      let value = $(this).attr("data-filter")
      let valueStatus = $(this).attr("data-filterStatus")
  
      setTimeout(function () {
        
          $(".cards-monitores .cardM").not("." + value).hide("10")
          $(".cards-monitores .cardM").filter("." + value).show("10")
  
      }, 100)
    }) 
  
  })