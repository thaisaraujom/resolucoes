   
    $(document).ready(function() {
      
      $(".caixas .box").click(function(){
        $(this).addClass("activeBox").siblings().removeClass("activeBox")
        
        $(".questoes-todas").fadeOut()
        setTimeout(function(){
          $(".questoes-todas").fadeIn()
        }, 200)



        let value = $(this).attr("data-filter")
        let valueStatus = $(this).attr("data-filterStatus")
        let seta_sumir = document.querySelector('.setinha-down')

        setTimeout(function(){

          if(value) {
            $(".questoes-todas .questoes-single").not("." + value).hide("150")
            $(".questoes-todas .questoes-single").filter("." + value).show("150")
            $(".questoes-capitulo .status-questoes").not("." + valueStatus).hide()
            $(".questoes-capitulo .status-questoes").filter("." + valueStatus).show()
            seta_sumir.style.visibility = 'visible'

          }
  
        }, 100)
      })
    })