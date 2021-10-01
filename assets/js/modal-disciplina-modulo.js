let modal_CC = document.querySelector('.modal1')
let simbolo_sair1 = document.querySelector('.x-sair1')
let button_modulo = document.querySelector('.button-cadastrar.button-cadastrar-monitor.button-modulo')

button_modulo.addEventListener('click', function () {
    event.preventDefault()
    modal_CC.style.visibility = 'visible'
})

simbolo_sair1.addEventListener('click', function () {
    event.preventDefault()
    modal_CC.style.visibility = 'hidden'
})

