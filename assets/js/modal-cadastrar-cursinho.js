var loaderFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('new1')
        output.style.display = 'block'
        output.style.backgroundImage = 'url(' + reader.result + ')'
    }
    reader.readAsDataURL(event.target.files[0])
}

/* --------------------------------------- MODAL 1 -----------------------------------*/

let cadastrar_C = document.querySelector('.button-cadastrarCursinho')
let modalCursinho = document.querySelector('#modal-cursinho')
let simbolo_sair = document.querySelector('.x-sairCursinho')

cadastrar_C.addEventListener('click', function () {
    event.preventDefault()
    modalCursinho.style.visibility = 'visible'
})

simbolo_sair.addEventListener('click', function () {
    event.preventDefault()
    modalCursinho.style.visibility = 'hidden'
})

/* --------------------------------------- MODAL 2 -----------------------------------*/
let cadastrarStaff = document.querySelector('.button-cadastrar.button-cadastrar-staff')
let modalStaff = document.querySelector('#modal-staff')
let simbolo_sair2 = document.querySelector('.x-sair.x-sairStaff')

cadastrarStaff.addEventListener('click', function () {
    event.preventDefault()
    modalStaff.style.visibility = 'visible'
})

simbolo_sair2.addEventListener('click', function () {
    event.preventDefault()
    modalStaff.style.visibility = 'hidden'
})
