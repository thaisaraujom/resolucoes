const conteudo_down = document.querySelector('.home-down')
const down = document.querySelector('.icon-down')

down.addEventListener('click', function(){
    conteudo_down.classList.toggle('home-desativada')
})