let finalizar = document.querySelector('.p-finalizar-simulado')

let modal_finalizar = document.querySelector('.modal-finalizar-overlay')
let simbolo_sair = document.querySelector('.x-sair')

let voltar_simulado = document.querySelectorAll('.voltar-simulado')

finalizar.addEventListener('click', function (e) {
    modal_finalizar.style.visibility = 'visible'
	e.preventDefault()
})

simbolo_sair.addEventListener('click', function (e) {
    modal_finalizar.style.visibility = 'hidden'
})

voltar_simulado.forEach((voltar_simulado_single) => {
    voltar_simulado_single.addEventListener('click', function () {
        modal_finalizar.style.visibility = 'hidden'
    })
})
