$(document).ready(function() {
    $(".materias .materia").click(function(){
      $(this).addClass("materia-selecionada borda").siblings().removeClass("materia-selecionada borda")
      $(".selecao")
      $(".modulos-todos").fadeOut()
      setTimeout(function(){
        $(".modulos-todos").fadeIn()
      }, 200)

      let value = $(this).attr("data-filter")

  

        if(value == "modulos-todos") {
          $(".modulos-todos .modulos").hide()
        } else {
          $(".modulos-todos .modulos").not("." + value).hide()
          $(".modulos-todos .modulos").filter("." + value).show()

        }

    })
  })