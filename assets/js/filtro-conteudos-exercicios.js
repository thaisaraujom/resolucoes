
// $(document).ready(function () {

//     $('.selects-exercicios.aba-conteudos').hide()
//     $(".titulos-conteudos-exercicios .box").click(function () {
//       $(this).addClass("selecionado").siblings().removeClass("selecionado")
//       let value = $(this).attr("data-filter")

//       setTimeout(function () {
        
//         $(".selects-exercicios").not("." + value).hide("150")
//         $(".selects-exercicios").filter("." + value).show("150")

//     }, 100)
//     })
// })

var conteudos_exerccios = document.querySelectorAll('.conteudos-exercicios')

conteudos_exerccios.forEach((contentTudo_single)=> {
    var aba_conteudos = contentTudo_single.querySelector('.aba-conteudos') 
    var aba_exercicios = contentTudo_single.querySelector('.aba-exercicios') 
    var aba_conteudo = contentTudo_single.querySelector('.aba-conteudo') 
    var aba_exercicio = contentTudo_single.querySelector('.aba-exercicio') 
    aba_conteudos.addEventListener('click', ()=> {
        aba_conteudos.classList.add('selecionado')
        aba_exercicios.classList.remove('selecionado')
        aba_conteudo.classList.add('selecionado')
        aba_exercicio.classList.remove('selecionado')
   })
    aba_exercicios.addEventListener('click', ()=> {
        aba_conteudos.classList.remove('selecionado')
        aba_exercicios.classList.add('selecionado')
        aba_conteudo.classList.remove('selecionado')
        aba_exercicio.classList.add('selecionado')
   })
   
})
    


// conteudos.forEach(conteudo_single => {
//     titulos.forEach(titulo_single=> {
//         let dataFilterS = titulo_single.getAttribute('data-filterStatus')
        
//             conteudo_single.addEventListener ('click', ()=> {
//                 if (selects_exercicios.getAttribute('data-filtro') == dataFilter) {
//                     alert('click')
//                     titulo_single.classList.add('selecionado')
//                    selects_exercicios.classList.remove('hide')
//                    selects_exercicios.classList.add('active')
//                    selects_exercicios.classList.remove('esconder-modulo')
//                 }

//         })
        
//     })
        
// })


var card_assunto = document.querySelectorAll('.card-assunto')

card_assunto.forEach((card_single=>{
    const seta_baixo = card_single.querySelector('.seta-baixa')
    const nome_assunto = card_single.querySelector('.nome-assunto')
    
    nome_assunto.addEventListener('click', ()=> {
        card_single.classList.toggle('selecionado')
        seta_baixo.classList.toggle('selecionado')
    })

})) 

