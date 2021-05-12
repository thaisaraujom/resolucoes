    $(document).ready(function() {
      $(".caixas .box").click(function(){
        $(this).addClass("activeBox").siblings().removeClass("activeBox")
        $(".questoes-todas").fadeOut()
        setTimeout(function(){
          $(".questoes-todas").fadeIn()
        }, 200)

        let value = $(this).attr("data-filter")

        setTimeout(function(){

          if(value == "todos") {
            $(".questoes-todas .questoes-single").show("500")
          } else {
            $(".questoes-todas .questoes-single").not("." + value).hide("150")
            $(".questoes-todas .questoes-single").filter("." + value).show("150")

          }
  
        }, 100)
      })
    })