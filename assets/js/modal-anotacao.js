var editar_anotacao = document.querySelector('.editar-icone')
var abrir_editar = document.querySelector('.editar')
var video = document.querySelector('.video2')
var minhas_anotacoes = document.querySelector('.ir-anotacoes')

var editar_anotacao_dentro = document.querySelector('.icon-editar')
var seta_anotacao_dentro = document.querySelector('.icon-seta-retornar')

editar_anotacao.addEventListener('click', function(){
    abrir_editar.classList.remove('desativar')
    editar_anotacao.classList.add('desativar')
    video.style.width = '60%'
    minhas_anotacoes.style.display = 'flex'
})

seta_anotacao_dentro.addEventListener('click', function(){
    abrir_editar.classList.add('desativar')
    editar_anotacao.classList.remove('desativar')
    video.style.width = '100%'
    minhas_anotacoes.style.display = 'none'
})

editar_anotacao_dentro.addEventListener('click', function(){
    abrir_editar.classList.add('desativar')
    editar_anotacao.classList.remove('desativar')
    video.style.width = '100%'
    minhas_anotacoes.style.display = 'none'
})