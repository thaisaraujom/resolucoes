
/* ---------------------------------------------------- CURSINHO PERFIL ALUNO */

var campo = document.querySelectorAll('.campo')

var btnSalvar = document.querySelector('.button_salvar')
var btnSair = document.querySelector('.button_sair')
var mudarCheck = document.querySelectorAll('.alternativas-check')
var mudarRadio = document.querySelectorAll('.alternativas-radio')
const input_edit = document.querySelectorAll('.area-edit')

input_edit.forEach((input_single) => {
    input_single.addEventListener('click', ()=> {
        btnSalvar.style.display = 'flex'
    })
})

mudarCheck.forEach((mudarCheck_single) => {
    mudarCheck_single.addEventListener('change', function(){
        btnSalvar.style.display = 'flex'
    })
})

mudarRadio.forEach((mudarRadio_single) => {
    mudarRadio_single.addEventListener('change', function(){
        btnSalvar.style.display = 'flex'
    })
})

