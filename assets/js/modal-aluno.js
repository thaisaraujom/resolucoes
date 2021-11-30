var modal = document.querySelector('.modal-overlay2')

//MODAL 1 VÍDEO -----------------------------------------------
var modal_video_fora = document.querySelector('.video-fora')
var modal_video_dentro = document.querySelector('.video-dentro')

var modal_anot_fora = document.querySelector('.anotacao-fora')
var modal_anot_dentro = document.querySelector('.anotacao-dentro')

var modal_video_anot = document.querySelector('.anotacao-dentro-video')
var modal_anot_video = document.querySelector('.video-dentro-anot')

var sair_modal = document.querySelector('.sair')
var sair_modal1 = document.querySelector('.sair1')

var back_modal = document.querySelector('.back-modal')
var next_modal = document.querySelector('.next-modal')

var modal03 = document.querySelector('.modal3')
var modal02 = document.querySelector('.modal2')

modal02.classList.add('deactivate')
modal03.classList.add('deactivate')

modal_video_fora.addEventListener('click', function(){
    modal.classList.add("active2")
    modal02.classList.add('ativar')
    next_modal.classList.remove('desativar')
    back_modal.classList.remove('desativar')

    modal03.classList.remove('ativar')
})

//Saindo do vídeo dentro do modal
modal_video_dentro.addEventListener('click', function(){
    modal.classList.remove("active2")
    modal03.classList.add('deactivate')  

    modal02.classList.remove('ativar')

    next_modal.classList.add('desativar')
    back_modal.classList.add('desativar')
})

//Saindo em X
sair_modal.addEventListener('click', function(){
    modal.classList.remove("active2")
    modal02.classList.remove('ativar')

    next_modal.classList.add('desativar')
    back_modal.classList.add('desativar')

    modal03.classList.remove('ativar')
})

//Entrando anotação modal do vídeo
modal_video_anot.addEventListener('click', function(){
    modal.classList.add("active2")
    modal03.classList.add('ativar')

    modal02.classList.remove('ativar')

    next_modal.classList.remove('desativar')
    back_modal.classList.remove('desativar')
})

//MODAL 2 ANOTAÇÃO -----------------------------------------------

modal_anot_fora.addEventListener('click', function(){
    modal.classList.add("active2")
    modal03.classList.add('ativar')
    next_modal.classList.remove('desativar')
    back_modal.classList.remove('desativar')

    modal02.classList.remove('ativar')
})

//Saindo em anotação dentro do modal
modal_anot_dentro.addEventListener('click', function(){
    modal.classList.remove("active2")
    modal03.classList.add('deactivate')  

    modal02.classList.remove('ativar')

    next_modal.classList.add('desativar')
    back_modal.classList.add('desativar')
})

//Saindo em X
sair_modal1.addEventListener('click', function(){
    modal.classList.remove("active2")
    modal03.classList.remove('ativar')

    next_modal.classList.add('desativar')
    back_modal.classList.add('desativar')

    modal02.classList.remove('ativar')
})

//Entrando vídeo modal anotação
modal_anot_video.addEventListener('click', function(){
    modal.classList.add("active2")
    modal02.classList.add('ativar')

    modal03.classList.remove('ativar')

    next_modal.classList.remove('desativar')
    back_modal.classList.remove('desativar')
})
