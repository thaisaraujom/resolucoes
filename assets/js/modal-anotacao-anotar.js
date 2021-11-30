var editar_anotacao1 = document.querySelector('.editar-icone1')
var abrir_editar1 = document.querySelector('.editar1')
var minhas_anotacoes1 = document.querySelector('.ir-anotacoes1')
var tamanho_anotacao = document.querySelector('.resolucao')

var editar_anotacao_dentro1 = document.querySelector('.icon-editar1')
var seta_anotacao_dentro1 = document.querySelector('.icon-seta-retornar1')

editar_anotacao1.addEventListener('click', function(){
    abrir_editar1.classList.remove('desativar1')
    editar_anotacao1.classList.add('desativar1')
    tamanho_anotacao.style.width = '60%'

    minhas_anotacoes1.style.display = 'flex'
})

seta_anotacao_dentro1.addEventListener('click', function(){
    abrir_editar1.classList.add('desativar1')
    editar_anotacao1.classList.remove('desativar1')
    tamanho_anotacao.style.width = '100%'
    minhas_anotacoes1.style.display = 'none'
})

editar_anotacao_dentro1.addEventListener('click', function(){
    abrir_editar1.classList.add('desativar1')
    editar_anotacao1.classList.remove('desativar1')
    tamanho_anotacao.style.width = '100%'
    minhas_anotacoes1.style.display = 'none'
})