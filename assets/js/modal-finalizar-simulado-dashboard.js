let finalizar = document.querySelector('.button_salvar')

let modal_finalizar = document.querySelector('.modal-finalizar-overlay')
let simbolo_sair = document.querySelector('.x-sair')

finalizar.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'visible'
})

simbolo_sair.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar.style.visibility = 'hidden'
})
