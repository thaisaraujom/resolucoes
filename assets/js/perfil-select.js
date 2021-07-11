var btnSalvar = document.querySelector('.button_salvar')
var btnSair = document.querySelector('.button_sair')

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