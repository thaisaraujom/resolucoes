var campo = document.querySelectorAll('.capitulo-questoes')

campo.forEach((campo_single) => {
    var editar_hab = campo_single.querySelector('.editar-nome-capitulo')
    var input = campo_single.querySelector('.nome-capitulo-modulo')

    editar_hab.addEventListener('click', function () {
        input.removeAttribute("disabled")
        editar_hab.style.display = 'none' 
    })
})

var campo1 = document.querySelectorAll('.secao-inicial')

campo1.forEach((campo_single1) => {
    var editar_M = campo_single1.querySelector('.editar-modulo')
    var input_M = campo_single1.querySelector('.titulo-admin.titulo_modulo-input')

    editar_M.addEventListener('click', ()=> {
        input_M.removeAttribute("disabled")
        input_M.style.marginLeft = '0'
        editar_M.style.display = 'none' 
    })
})