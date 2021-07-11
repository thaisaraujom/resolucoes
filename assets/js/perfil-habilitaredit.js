var campo = document.querySelectorAll('.campo')

var btnSalvar = document.querySelector('.button_salvar')
var btnSair = document.querySelector('.button_sair')
var mudarRadio = document.querySelectorAll('.alternativas-radio')

campo.forEach((campo_single) => {
    var editar_hab = campo_single.querySelector('.habilitar-edicao')
    var editar_habM = campo_single.querySelector('.habilitar-edicaoM')
    
    var input = campo_single.querySelector('.area-edit')

    editar_hab.addEventListener('click', function () {
        input.removeAttribute("disabled") //o atributo é falso
        editar_hab.style.display = 'none'
        btnSalvar.style.display = 'flex'
        btnSair.style.display = 'none'
    })

    editar_habM.addEventListener('click', function () {
        input.removeAttribute("disabled") //o atributo é falso
        editar_habM.style.display = 'none'
        btnSalvar.style.display = 'flex'
        btnSair.style.display = 'none'
    })

})

mudarRadio.forEach((mudarRadio_single) => {
    mudarRadio_single.addEventListener('change', function(){
        btnSalvar.style.display = 'flex'
        btnSair.style.display = 'none'
    })
})
