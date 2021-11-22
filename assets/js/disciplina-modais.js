/* --------------------------------------- MODAL VÍDEO AULA -----------------------------------*/
let cadastrar_a = document.querySelector('.button-cadastrar.button-cadastrar-monitor.button-video')
let modal_finalizar2 = document.querySelector('.modal-finalizar-overlay.modal2')
let simbolo_sair2 = document.querySelector('.x-sair.x-sair1')

cadastrar_a.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar2.style.visibility = 'visible'
})

simbolo_sair2.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar2.style.visibility = 'hidden'
})

/* --------------------------------------- MODAL MÓDULO -----------------------------------*/
let cadastrar_a1 = document.querySelector('.button-cadastrar.button-cadastrar-monitor.button-modulo')
console.log(cadastrar_a1);
let modal_finalizar1 = document.querySelector('.modal-finalizar-overlay.modal1')
let simbolo_sair1 = document.querySelector('.x-sair.x-sair2')

cadastrar_a1.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'visible'
})

simbolo_sair1.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'hidden'
})