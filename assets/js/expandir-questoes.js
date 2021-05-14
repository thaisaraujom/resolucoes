var setinha_expandir = document.querySelector('.setinha-up')
var setinha_sumir = document.querySelector('.setinha-down')
conteudo_questoes = document.querySelector('.questoes-todas')


setinha_sumir.addEventListener('click', function(){
    conteudo_questoes.style.visibility = 'hidden'
    setinha_expandir.style.visibility = 'visible'
    setinha_sumir.style.visibility = 'hidden'
})

setinha_expandir.addEventListener('click', function(){
    conteudo_questoes.style.visibility = 'visible'
    setinha_expandir.style.visibility = 'hidden'
    setinha_sumir.style.visibility = 'visible'
})