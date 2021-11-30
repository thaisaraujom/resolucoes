var editar_habilitado = document.querySelector('.editar-habilitado')
var editar_habilitado1 = document.querySelector('.editar-habilitado1')
var area_texto = document.querySelector('.area-texto')
var area_texto1 = document.querySelector('.area-texto1')
var data_hora = document.querySelector('.data-hora')
var data_hora1 = document.querySelector('.data-hora1')
var botao_enviar = document.querySelector('.botao-enviar')
var botao_enviar1 = document.querySelector('.botao-enviar1')
var zoom = document.querySelector('.icon-zoom')
var zoom1 = document.querySelector('.icon-zoom1')
var editar = document.querySelector('.editar')
var editar1 = document.querySelector('.editar1')

botao_enviar.style.display = 'none'
botao_enviar1.style.display = 'none'

editar_habilitado.addEventListener('click', function(){
    area_texto.removeAttribute("disabled") //o atributo é falso
    data_hora.style.display = 'none'
    botao_enviar.style.display = 'flex'
    editar_habilitado.style.display = 'none'

})

editar_habilitado1.addEventListener('click', function(){
    area_texto1.removeAttribute("disabled") //o atributo é falso
    data_hora1.style.display = 'none'
    botao_enviar1.style.display = 'flex'
    editar_habilitado1.style.display = 'none'
})

zoom.addEventListener('click', function(){
    editar.classList.toggle('notacao-full')
})
zoom1.addEventListener('click', function(){
    editar1.classList.toggle('notacao-full')
})

