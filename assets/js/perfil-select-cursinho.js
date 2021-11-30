var btnSalvar = document.querySelector('.button_salvar')
var btnSair = document.querySelector('.button_sair')
var btnApagarDesktop = document.querySelector('.b-lixeira.desktop')
var btnApagarMobile = document.querySelector('.b-lixeira.mobile')

let imgExclamacao = document.querySelector('.exclamacao')
let check = document.querySelector('.check-desktop')
let checkM = document.querySelector('.check-mobile')

function myFunction() {
    let curso = document.querySelector('#select-curso').value
    if ((curso) != 0 ) {
        console.log(curso);
        imgExclamacao.style.display = 'none'
        check.style.display = 'flex'
        btnSalvar.style.display = 'flex'
        btnSair.style.display = 'none'
        
        if(innerWidth < 770) {
            checkM.style.display = 'flex'
            check.style.display = 'none'
        }
        
    } else {
        imgExclamacao.style.display = 'flex'
        check.style.display = 'none'
        checkM.style.display = 'none'
        btnSalvar.style.display = 'none'
        btnSair.style.display = 'flex'
    }
}

var campo = document.querySelectorAll('.campo')

var btnSalvar = document.querySelector('.button_salvar')
var btnSair = document.querySelector('.button_sair')
var mudarCheck = document.querySelectorAll('.alternativas-check')

campo.forEach((campo_single) => {
    var editar_hab = campo_single.querySelector('.habilitar-edicao')
    var editar_habM = campo_single.querySelector('.habilitar-edicaoM')
    
    var input = campo_single.querySelector('.area-edit')

    editar_hab.addEventListener('click', function () {
        input.removeAttribute("disabled") //o atributo é falso
        editar_hab.style.display = 'none'
        btnSalvar.style.display = 'flex'
        btnSair.style.display = 'none'
        btnApagarDesktop.style.display = 'none'
        btnApagarMobile.style.display = 'none'
    })

    editar_habM.addEventListener('click', function () {
        input.removeAttribute("disabled") //o atributo é falso
        editar_habM.style.display = 'none'
        btnSalvar.style.display = 'flex'
        btnSair.style.display = 'none'
        btnApagarDesktop.style.display = 'none'
        btnApagarMobile.style.display = 'none'
    })

})

mudarCheck.forEach((mudarCheck_single) => {
    mudarCheck_single.addEventListener('change', function(){
        btnSalvar.style.display = 'flex'
        btnSair.style.display = 'none'
        btnApagarDesktop.style.display = 'none'
        btnApagarMobile.style.display = 'none'
    })
})
