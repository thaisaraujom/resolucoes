const modal_desvincular = document.querySelector('.modal-desvincular')
const sair_x = document.querySelector('.x-sair')
const cancelar_desvincular = document.querySelector('.button-cancelar-modal')
const check_desvincular = document.querySelector('#campo-checkbox-questao')
const form_check = document.querySelector('.form-questao-cadastrada')

check_desvincular.addEventListener('change', function () {
    event.preventDefault()
    if(check_desvincular.checked == false) {
        modal_desvincular.style.visibility = 'visible'
    }
})

// sair_x.addEventListener('click', function () {
//     event.preventDefault()
//     modal_desvincular.style.visibility = 'hidden'
// })

// cancelar_desvincular.addEventListener('click', function () {
//     event.preventDefault()
//     modal_desvincular.style.visibility = 'hidden'
//     if(check_desvincular.checked == true) {
//         check_desvincular.setAttribute('checked', 'checked');
//     }
// })