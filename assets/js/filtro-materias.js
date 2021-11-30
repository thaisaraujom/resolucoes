/* DESKTOP */
// $(document).ready(function () {

//   $(".materias .materia").click(function () {
//     $(this).addClass("materia-selecionada borda").siblings().removeClass("materia-selecionada borda")

//     $(".modulos-todos").fadeOut()
//     setTimeout(function () {
//       $(".modulos-todos").fadeIn()
//     }, 200)

//     let value = $(this).attr("data-filter")



//     if (value) {
//       $(".modulos-todos .modulos").not("." + value).hide()
//       $(".modulos-todos .modulos").filter("." + value).show()

//     } else if (value == '') {
//       $(".modulos-todos").style.display = 'none'
//     }

//   })

//   /* FIM DESKTOP */

//    /* MOBILE */
//   $(".materias-drop .materia").click(function () {
//     $(this).addClass("materia-selecionada-drop borda-drop").siblings().removeClass("materia-selecionada-drop borda-drop")

//     $(".modulos-todos").fadeOut()
//     setTimeout(function () {
//       $(".modulos-todos").fadeIn()
//     }, 200)

//     let value = $(this).attr("data-filter")



//     if (value) {
//       $(".modulos-todos .modulos").not("." + value).hide()
//       $(".modulos-todos .modulos").filter("." + value).show()

//     } else if (value == '') {
//       $(".modulos-todos").style.display = 'none'
//     }

//   })
//    /* FIM MOBILE */
// })

let materia = document.querySelectorAll('.carousel .materia')
let modulos = document.querySelectorAll('.modulos')

materia.forEach((materia_single) => {
    materia_single.addEventListener('click', function () {
        materia.forEach((materia_single1) => {
            materia_single1.classList.remove('active')
            materia_single1.classList.remove('borda')
        })

        this.classList.add('active')
        this.classList.add('borda')

        let dataFilter = this.getAttribute('data-filter')

        modulos.forEach((modulos_single) => {
            modulos_single.classList.remove('active')
            modulos_single.classList.add('hide')
            modulos_single.classList.add('esconder-modulo')

            if (modulos_single.getAttribute('data-item') == dataFilter) {
                modulos_single.classList.remove('hide')
                modulos_single.classList.add('active')
                modulos_single.classList.remove('esconder-modulo')
            }
        })

    })

})

// let materias_drop = document.querySelectorAll('.materias-drop .materia')

// materias_drop.forEach((materiaD_single) => {
//     materiaD_single.addEventListener('click', function () {
//         materias_drop.forEach((materiaD_single1) => {
//             materiaD_single1.classList.toggle('active')
//             materiaD_single1.classList.remove('borda-drop')
//             materiaD_single1.classList.remove('materia-selecionada-drop')
//         })

//         this.classList.add('active')
//         this.classList.add('materia-selecionada-drop')
//         this.classList.add('borda-drop')

//         let dataFilter = this.getAttribute('data-filter')

//         modulos.forEach((modulos_single) => {
//             modulos_single.classList.remove('active')
//             modulos_single.classList.add('hide')
//             modulos_single.classList.add('esconder-modulo')

//             if (modulos_single.getAttribute('data-item') == dataFilter) {
//                 modulos_single.classList.remove('hide')
//                 modulos_single.classList.add('active')
//                 modulos_single.classList.remove('esconder-modulo')
//             }
//         })
        

//     })

// })

// const sel = document.getElementById('materias-selector');
// const modulosMaterias =  Array.from(document.querySelectorAll('.modulos'));

// sel.addEventListener('change', function(){
//     for(let i=0; i < modulosMaterias.length; i++){
//         if(modulosMaterias[i].dataset.item != sel.value){
//             modulosMaterias[i].classList.add('esconder-modulo');
//             modulosMaterias[i].classList.remove('hide');
//             modulosMaterias[i].classList.remove('active');
//         }else{
//             modulosMaterias[i].classList.remove('hide');
//             modulosMaterias[i].classList.remove('active');
//             modulosMaterias[i].classList.remove('esconder-modulo');
//         }
//     }   
// })