var modal = document.querySelector('.modal-overlay')

//MODAL 1 ANOTAÇÃO POSTADA -----------------------------------------------
var modal_icon_fora = document.querySelector('.anotacaopostada')
var modal_icon_dentro = document.querySelector('.anotacaopostada-dentro')
var sair_modal = document.querySelector('.sair')

var modal01 = document.querySelector('.modal1')
var modal00 = document.querySelector('.modal')

modal00.classList.add('deactivate')
modal01.classList.add('deactivate')

modal_icon_fora.addEventListener('click', function(){
    modal.classList.add("active")
    modal00.classList.add('ativar')

    modal01.classList.remove('ativar')
})

//Saindo em anotação dentro do modal
modal_icon_dentro.addEventListener('click', function(){
    modal.classList.remove("active")
    modal00.classList.add('deactivate')  

    modal01.classList.remove('ativar')
})

//Saindo em X
sair_modal.addEventListener('click', function(){
    modal.classList.remove("active")
    modal00.classList.add('deactivate')

    modal01.classList.remove('ativar')
})

//Entrando anotação modal do vídeo
var video_anotacao = document.querySelector('.video-anotacao')

video_anotacao.addEventListener('click', function(){
    modal.classList.add("active")
    modal01.classList.add('ativar')

    modal00.classList.remove('ativar')
})

//MODAL 2 VÍDEO POSTADO --------------------------------------------------
var modal_video_fora = document.querySelector('.video-fora')
var modal_video_dentro = document.querySelector('.video-dentro')

var sair_modal1 = document.querySelector('.sair1')

modal_video_fora.addEventListener('click', function(){
    modal.classList.add("active")
    modal01.classList.add('ativar') 
    
    modal00.classList.remove('ativar')   
})

//Saindo em vídeo dentro do modal
modal_video_dentro.addEventListener('click', function(){
    modal.classList.remove("active")
    modal01.classList.add('deactivate')  

    modal00.classList.remove('ativar')
})

//Saindo em X
sair_modal1.addEventListener('click', function(){
    modal.classList.remove("active")
    modal01.classList.add('deactivate')

    modal00.classList.remove('ativar')

})

//Entrando anotação modal do vídeo
var anotacaopostada_video = document.querySelector('.anotacaopostadavideo')

anotacaopostada_video.addEventListener('click', function(){
    modal.classList.add("active")
    modal00.classList.add('ativar')

    modal01.classList.remove('ativar')
})
