const select = document.querySelectorAll('.select-rotina-estudo')


select.forEach((select_single) => {
    const select_rotina = select_single.querySelector('.select-rotina')
    const check_cursinho = select_single.querySelector('.check-cursinho')
    const seta_baixo = select_single.querySelector('.seta-baixa-rotina')
    select_rotina.addEventListener('click', () => {
        check_cursinho.classList.toggle('ativar-down')
        seta_baixo.classList.toggle('girar')

    })
})

const b_abrir = document.querySelector('.button_salvar-cursinho')
const nao = document.querySelector('.button_cancelar_alt')
const sim = document.querySelector('.button_salvar_alt')
const sair1 = document.querySelector('.x-sair1')
const sair2 = document.querySelector('.x-sair2')

let modal_finalizar1 = document.querySelector('.modal-finalizar-overlay.modal1')
let modal_finalizar2 = document.querySelector('.modal-finalizar-overlay.modal2')
let simbolo_sair = document.querySelector('.x-sair')

b_abrir.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'visible'
})

sair1.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'hidden'
})

nao.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar1.style.visibility = 'hidden'
})

sim.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar2.style.visibility = 'visible'
    modal_finalizar1.style.visibility = 'hidden'
})

sair2.addEventListener('click', function () {
    event.preventDefault()
    modal_finalizar2.style.visibility = 'hidden'
})
