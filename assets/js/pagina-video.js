let finalizar = document.querySelector('.aula-concluida')
let modal_finalizar = document.querySelector('.modal-finalizar-overlay')
let simbolo_sair = document.querySelector('.x-sair')

finalizar.addEventListener('change', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'visible'
})
simbolo_sair.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'hidden'
})


var esconderedit = document.querySelector(".botao-edit-anote")
esconderedit.addEventListener("click", function(){
    var navbar__wrap = document.querySelector("#esconderedit");
    navbar__wrap.classList.toggle("esconderedit")
})

function toggle(enable) {
    document.getElementById("anotacoes-video").disabled = enable;
  }
