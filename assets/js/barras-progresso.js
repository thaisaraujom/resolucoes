/* ----------BARRA QUE EXPANDE----------- */
let bar_cheia = document.querySelectorAll('.bar_full');
bar_cheia.forEach((barra) => {
    let total_questoes = barra.dataset.questions
    
    let barra_verde = barra.querySelector('.bar_complete')
    let barra_vermelha = barra.querySelector('.bar_erros')
    let barra_duvidas = barra.querySelector('.bar_duvidas')
    

    let questoes_completas = barra.querySelector('.complete_questions').innerHTML
    let questoes_erradas = barra.querySelector('.erros_questions').innerHTML
    let questoes_duvidas = barra.querySelector('.duvidas_questions').innerHTML
    

    const tamanho_vermelho = (100 * questoes_erradas) / total_questoes;
    const tamanho_verde = (100 * questoes_completas) / total_questoes;
    const tamanho_duvidas = (100 * questoes_duvidas) / total_questoes;

    barra_duvidas.style.width = `${tamanho_duvidas}%`
    barra_vermelha.style.width = `${tamanho_vermelho}%`
    barra_verde.style.width = `${tamanho_verde}%`

    /* ------- ARREDONDANDO SE SÓ ESTIVEREM ELAS -----*/

    if (barra_duvidas.style.width == `${100}%`) {
        barra_duvidas.style.borderRadius = '10px 10px 10px 10px'
        barra_vermelha.style.display = 'none'
        barra_verde.style.display = 'none'
    }

    if (barra_vermelha.style.width == `${100}%`) {
        barra_vermelha.style.borderRadius = '10px 10px 10px 10px'
        barra_duvidas.style.display = 'none'
        barra_verde.style.display = 'none'
    }

    if (barra_verde.style.width == `${100}%`) {
        barra_verde.style.borderRadius = '10px 10px 10px 10px'
        barra_duvidas.style.display = 'none'
        barra_vermelha.style.display = 'none'
    }

    /* ------- ARREDONDANDO BARRA LARANJA DE CADA LADO ( L + VERM OU VER + L) -----*/

    if (barra_vermelha.style.width == `${0}%` && (barra_verde.style.width !=`${100}%` && barra_verde.style.width != `${0}%`) && (barra_duvidas.style.width != `${100}%` && barra_duvidas.style.width != `${0}%`)) {
        barra_duvidas.style.borderRadius = '0 10px 10px 0'
        barra_vermelha.style.display = 'none'
    }

    if (barra_verde.style.width == `${0}%` && (barra_vermelha.style.width !=`${100}%` && barra_vermelha.style.width != `${0}%`) && (barra_duvidas.style.width != `${100}%` && barra_duvidas.style.width != `${0}%`)) {
        barra_duvidas.style.borderRadius = '10px 0 0 10px'
        barra_verde.style.display = 'none'
    }

    /* ------- DESAPARECER BARRA LARANJA SE ELA FOR 0 -----*/
    if (barra_duvidas.style.width == `${0}%`) {
        barra_duvidas.style.display = 'none'
    }

})

var expandir_barra1 = document.querySelector('.expandir-barra1')
var expandir_barra2 = document.querySelector('.expandir-barra2')
var expandir_barra3 = document.querySelector('.expandir-barra3')
var expandir_barra4 = document.querySelector('.expandir-barra4')
var expandir_barra5 = document.querySelector('.expandir-barra5')

var barra_full5 = document.querySelector('.bar_full5')
var barra_full4 = document.querySelector('.bar_full4')
var barra_full3 = document.querySelector('.bar_full3')
var barra_full2 = document.querySelector('.bar_full2')
var barra_full1 = document.querySelector('.bar_full1')


expandir_barra1.addEventListener('click', function(){
    barra_full1.classList.toggle('expans-full')
})

expandir_barra2.addEventListener('click', function(){
    barra_full2.classList.toggle('expans-full')
})

expandir_barra3.addEventListener('click', function(){
    barra_full3.classList.toggle('expans-full')
})

expandir_barra4.addEventListener('click', function(){
    barra_full4.classList.toggle('expans-full')
})

expandir_barra5.addEventListener('click', function(){
    barra_full5.classList.toggle('expans-full')
})

// const expandir = {
//     toggle () {
//         const teste = document.querySelector('.bar_full')
//         classList.toggle('expans-full')
//     }
// }

/* ----------FIM BARRA QUE EXPANDE----------- */


/* ----------BARRA MENOR----------- */
let barra_total = document.querySelectorAll('.barra-total');
barra_total.forEach((barra_pequena)=>{
    let total_questoes_barrinha = barra_pequena.dataset.questions

    let barra_verde_p = barra_pequena.querySelector('.barra-completa')

    let questoes_feitas = Number(barra_pequena.querySelector('.barra-concluidas').innerHTML)

    const tamanho_verde_p = (100 * questoes_feitas) /total_questoes_barrinha

    barra_verde_p.style.width = `${tamanho_verde_p}%`

})



