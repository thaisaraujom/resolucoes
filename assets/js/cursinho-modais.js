let cadastrar_d = document.querySelector('.button-cadastrar.button-disciplina-c')
console.log(cadastrar_d);
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
