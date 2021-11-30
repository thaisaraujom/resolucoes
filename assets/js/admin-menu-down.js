const conteudo_down = document.querySelector('.home-down')
const down_home = document.querySelector('.icon-down')
const ativado = document.querySelector('.item-link-ativado')

// const home = document.querySelector('.item-home')
// const perfil = document.querySelector('.item-perfil')
// const sobre = document.querySelector('.item-sobre')

// const icon_home = document.querySelector('.icon_home')
// const icon_perfil = document.querySelector('.icon_perfil')

down_home.addEventListener('click', function(){
    conteudo_down.classList.toggle('home-desativada')
})

// const conteudo_down1 = document.querySelector('.sobre-down')
// const icon_sobre_cursinho = document.querySelector('.mais-cursinho')

// icon_sobre_cursinho.addEventListener('click', function(){
//     conteudo_down1.classList.toggle('home-desativada')
//     icon_sobre_cursinho.src = '../assets/img/aluno-questao/sugerir-laranja.svg'
//     sobre.classList.add('item-link-ativado')
//     home.classList.remove('item-link-ativado')
//     icon_home.src = '../assets/img/aluno-questao/home.svg'
//     down_home.src = '../assets/img/admin-menu/seta.svg'
// })
