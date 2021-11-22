const expandir_anotacao = document.querySelector('.expandir')
const video = document.querySelector('.video-video')
const anotacao = document.querySelector('.alt-anotacoes')

expandir_anotacao.addEventListener('click', ()=> {
    video.classList.toggle('diminuir-video')
    anotacao.classList.toggle('full-anotacao')
})

