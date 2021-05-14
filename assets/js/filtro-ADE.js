
$(document).ready(function () {

  $(".caixas .box").click(function () {
    $(this).addClass("activeBox").siblings().removeClass("activeBox")

    $(".questoes-todas").fadeOut()
    setTimeout(function () {
      $(".questoes-todas").fadeIn()
    }, 200)

    let value = $(this).attr("data-filter")
    let valueStatus = $(this).attr("data-filterStatus")

    setTimeout(function () {
      if (value == "todos") {
        $(".questoes-todas .questoes-single").show("150")
      } else {
        $(".questoes-todas .questoes-single").not("." + value).hide("150")
        $(".questoes-todas .questoes-single").filter("." + value).show("150")
        $(".questoes-capitulo .status-questoes").not("." + valueStatus).hide()
        $(".questoes-capitulo .status-questoes").filter("." + valueStatus).show()
        $(".setinha-down").css("visibility", "visible")
      }

    }, 100)
  })

  $(".setinha-down").click(function () {
    $(this).addClass("activeDown").siblings().removeClass("activeDown")

    $(".questoes-todas").fadeOut()
    setTimeout(function () {
      $(".questoes-todas").fadeIn()
    }, 200)

    let value = $(this).attr("data-filter")
    let valueStatus = $(this).attr("data-filterStatus")

    if (value == "todos") {
      $(".questoes-todas .questoes-single").show("150")
      $(".setinha-down").css("visibility", "hidden")
      $(".questoes-capitulo .status-questoes").not("." + valueStatus).hide()
    }
  })


})