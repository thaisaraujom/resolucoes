let cadastrar_d = document.querySelector('.button-cadastrar.button-disciplina-c')
let modal_finalizar = document.querySelector('.modal-finalizar-overlay.modal1')
let simbolo_sair = document.querySelector('.x-sair')

cadastrar_d.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'visible'
})

simbolo_sair.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'hidden'
})

/* --------------------------------------- MODAL 2 -----------------------------------*/
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
