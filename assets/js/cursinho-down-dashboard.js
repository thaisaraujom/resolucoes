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
