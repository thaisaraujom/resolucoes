let finalizar = document.querySelector('.desktop.disparar-modal')
let finalizar1 = document.querySelector('.mobile.disparar-modal')
let modal_finalizar = document.querySelector('.modal-finalizar-overlay')
let simbolo_sair = document.querySelector('.x-sair')

finalizar.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'visible'
})
finalizar1.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'visible'
})
simbolo_sair.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'hidden'
})