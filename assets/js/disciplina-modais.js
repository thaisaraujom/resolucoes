/* --------------------------------------- MODAL ALUNO -----------------------------------*/
let cadastrar_a = document.querySelector('.button-cadastrar.baluno')
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