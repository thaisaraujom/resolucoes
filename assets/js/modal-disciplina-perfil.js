const apagar_c = document.querySelector('.b-lixeira.desktop')
const apagar_texto1 = document.querySelector('.button_sair')
const apagar_c2 = document.querySelector('.b-lixeira.mobile')

const apagar_capitulo = document.querySelectorAll('.button-lixeira')

const button_cancelar_modal1 = document.querySelector('.button-cancelar-modal1')
const button_cancelar_modal2 = document.querySelector('.button-cancelar-modal2')

let modal_finalizar1 = document.querySelector('.modal1')
let simbolo_sair1 = document.querySelector('.x-sair1')

let modal_finalizar2 = document.querySelector('.modal2')
let simbolo_sair2 = document.querySelector('.x-sair2')

apagar_c.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'visible'
})

apagar_c2.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'visible'
})

apagar_texto1.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'visible'
})

simbolo_sair1.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'hidden'
})

button_cancelar_modal1.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'hidden'
})

/* ---------------------- MODAL 2 ---------------------- */

apagar_capitulo.forEach((apagar_single)=> {
    apagar_single.addEventListener('click', function () {
        event.preventDefault()
        modal_finalizar2.style.visibility = 'visible'
    })
}) 


simbolo_sair2.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar2.style.visibility = 'hidden'
})

button_cancelar_modal2.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar2.style.visibility = 'hidden'
})
