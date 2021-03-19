var editar_habilitado = document.querySelector('.editar-habilitado')
var area_texto = document.querySelector('.area-texto')
var data_hora = document.querySelector('.data-hora')
var botao_enviar = document.querySelector('.botao-enviar')
var zoom = document.querySelector('.icon-zoom')
var editar = document.querySelector('.editar')

botao_enviar.style.display = 'none'

editar_habilitado.addEventListener('click', function(){
    area_texto.removeAttribute("disabled") //o atributo é falso
    data_hora.style.display = 'none'
    botao_enviar.style.display = 'flex'
    editar_habilitado.style.display = 'none'

})

zoom.addEventListener('click', function(){
    editar.classList.toggle('notacao-full')
})
