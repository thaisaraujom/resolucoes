const apagar_c = document.querySelector('.b-lixeira.desktop')
const apagar_texto = document.querySelector('.button_sair')
const apagar_c2 = document.querySelector('.b-lixeira.mobile')
const button_cancelar_modal = document.querySelector('.button-cancelar-modal')
console.log(apagar_c);

let modal_finalizar = document.querySelector('.modal-finalizar-overlay')
let simbolo_sair = document.querySelector('.x-sair')

apagar_c.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'visible'
})

apagar_c2.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'visible'
})

apagar_texto.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'visible'
})

simbolo_sair.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'hidden'
})

button_cancelar_modal.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'hidden'
})
