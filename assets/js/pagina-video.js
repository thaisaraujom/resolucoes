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


var hide = document.querySelector(".botao-edit-anote")
hide.addEventListener("click", function(){
    var navbar__wrap = document.querySelector("#botao-anotacoes");
    navbar__wrap.classList.toggle("hide-botao")
})

var hide = document.querySelector(".mobile-botao-editar")
hide.addEventListener("click", function(){
    var navbar__wrap = document.querySelector("#alt-anotacoes");
    navbar__wrap.classList.toggle("hide-anotacoes")
})

function toggle(enable) {
    document.getElementById("anotacoes-video").disabled = enable;
  }
