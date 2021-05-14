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

let materia = document.querySelectorAll('.materia')
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

            if (modulos_single.getAttribute('data-item') == dataFilter) {
                modulos_single.classList.remove('hide')
                modulos_single.classList.add('active')
            }
        })

    })

})