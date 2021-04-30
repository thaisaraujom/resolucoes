
// var bar_cheiaM = document.querySelectorAll('.bar_full');
//  bar_cheiaM.forEach((barraM) => {
//      var total_questoesM = barraM.dataset.questions
//      console.log(total_questoesM); 
//      let barra_verdeM = barraM.querySelector('.bar_complete')
//      let barra_vermelhaM = barraM.querySelector('.bar_erros')
//      let barra_duvidasM = barraM.querySelector('.bar_duvidas')
//      var barra_brancoM = barraM.querySelector('.bar_branco')


//      let questoes_completasM = barraM.querySelector('.complete_questions').innerHTML
//      let questoes_erradasM = barraM.querySelector('.erros_questions').innerHTML
//      let questoes_duvidasM = barraM.querySelector('.duvidas_questions').innerHTML
//      let questoes_brancoM = barraM.querySelector('.white_questions').innerHTML


//      const tamanho_vermelhoM = (100 * questoes_erradasM) / total_questoesM;
//      const tamanho_verdeM = (100 * questoes_completasM) / total_questoesM;
//      const tamanho_duvidasM = (100 * questoes_duvidasM) / total_questoesM;
//      const tamanho_brancasM = (100 * questoes_brancoM) / total_questoesM;

//      barra_duvidas.style.width = `${tamanho_duvidasM}%`
//      barra_vermelha.style.width = `${tamanho_vermelhoM}%`
//      barra_verde.style.width = `${tamanho_verdeM}%`
//      barra_branco.style.width = `${tamanho_brancasM}%`


//     /* ------- ARREDONDANDO SE SÓ ESTIVEREM ELAS -----*/

//     if (barra_duvidas.style.width == `${100}%`) {
//         barra_duvidas.style.borderRadius = '10px 10px 10px 10px'
//         barra_vermelha.style.display = 'none'
//         barra_verde.style.display = 'none'
//         barra_branco.style.display = 'none'

//     }

//     if (barra_vermelha.style.width == `${100}%`) {
//         barra_vermelha.style.borderRadius = '10px 10px 10px 10px'
//         barra_duvidas.style.display = 'none'
//         barra_verde.style.display = 'none'
//         barra_branco.style.display = 'none'
//     }

//     if (barra_verde.style.width == `${100}%`) {
//         barra_verde.style.borderRadius = '10px 10px 10px 10px'
//         barra_duvidas.style.display = 'none'
//         barra_vermelha.style.display = 'none'
//         barra_branco.style.display = 'none'
//     }

//     if (barra_branco.style.width == `${100}%`) {
//         barra_branco.style.borderRadius = '10px 10px 10px 10px'
//         barra_duvidas.style.display = 'none'
//         barra_vermelha.style.display = 'none'
//         barra_verde.style.display = 'none'
//     }

//     /* ------- ARREDONDANDO BARRA LARANJA DE CADA LADO ( L + VERM OU VER + L) -----*/

//     if (barra_vermelha.style.width == `${0}%` && (barra_verde.style.width !=`${100}%` && barra_verde.style.width != `${0}%`) && (barra_duvidas.style.width != `${100}%` && barra_duvidas.style.width != `${0}%`)) {
//         barra_duvidas.style.borderRadius = '0 10px 10px 0'
//         barra_vermelha.style.display = 'none'
//     }

//     if (barra_verde.style.width == `${0}%` && (barra_vermelha.style.width !=`${100}%` && barra_vermelha.style.width != `${0}%`) && (barra_duvidas.style.width != `${100}%` && barra_duvidas.style.width != `${0}%`)) {
//         barra_duvidas.style.borderRadius = '10px 0 0 10px'
//         barra_verde.style.display = 'none'
//     }

//     /* ------- DESAPARECER BARRA LARANJA SE ELA FOR 0 -----*/
//     if (barra_duvidas.style.width == `${0}%`) {
//         barra_duvidas.style.display = 'none'
//     }

// })




/* -------------------- BARRA PEQUENA ------------------------------ */
const moduloCompleto = (barraTotal, barraCompleta, barraConcluida) => {
    let barra_total = document.querySelectorAll(barraTotal)


    barra_total.forEach((barra_pequena) => {
        let total_questoes_barrinha = barra_pequena.dataset.questions
        let barra_verde_p = barra_pequena.querySelector(barraCompleta)
        let questoes_feitas = Number(barra_pequena.querySelector(barraConcluida).innerHTML)
        const tamanho_verde_p = (100 * questoes_feitas) / total_questoes_barrinha
        barra_verde_p.style.width = `${tamanho_verde_p}%`
    })
}

const progresso = () => {
    moduloCompleto('.barra-totalM', '.barra-completaM', '.barra-concluidasM')
}

progresso()

/* -------------------- FIM BARRA PEQUENA ------------------------------ */

/* --------------------------- APARECER CHECK E BARRA GRANDE ------------------------------ */
const modulo = document.querySelectorAll('.modulo')

modulo.forEach((modulo_single) => {
    //expandir barra
    var botao = modulo_single.querySelector('.expandir-barraM')
    var barraG = modulo_single.querySelector('.bar_full')
    botao.addEventListener('click', function () {
        barraG.classList.toggle('active')
    })

    //ajustar o check
    var barra_toda = modulo_single.querySelector('.barra-totalM')
    var aparecer = modulo_single.querySelector('.concluido')

    var total_questoes_barrinha = barra_toda.dataset.questions
    var questoesFeitas = Number(modulo_single.querySelector('.barra-concluidasM').innerHTML)
    const tamanho_barrinha = (100 * questoesFeitas) / total_questoes_barrinha

    if (tamanho_barrinha == 100) {
        aparecer.style.visibility = 'visible'
    }

    //barra grande

    var barra_todaG = modulo_single.querySelector('.bar_full')
    var barra_verdeG = modulo_single.querySelector('.bar_complete')
    var barra_vermelhaG = modulo_single.querySelector('.bar_erros')
    var barra_duvidasG = modulo_single.querySelector('.bar_duvidas')
    var barra_brancoG = modulo_single.querySelector('.bar_branco')

    var total_questoesG = barra_todaG.dataset.questions

    var questoes_completasG = barra_todaG.querySelector('.complete_questions').innerHTML
    var questoes_erradasG = barra_todaG.querySelector('.erros_questions').innerHTML
    var questoes_duvidasG = barra_todaG.querySelector('.duvidas_questions').innerHTML
    var questoes_brancoG = barra_todaG.querySelector('.white_questions').innerHTML

    const tamanho_vermelhoG = (100 * questoes_erradasG) / total_questoesG;
    const tamanho_verdeG = (100 * questoes_completasG) / total_questoesG;
    const tamanho_duvidasG = (100 * questoes_duvidasG) / total_questoesG;
    const tamanho_brancasG = (100 * questoes_brancoG) / total_questoesG;

    barra_duvidasG.style.width = `${tamanho_duvidasG}%`
    barra_vermelhaG.style.width = `${tamanho_vermelhoG}%`
    barra_verdeG.style.width = `${tamanho_verdeG}%`
    barra_brancoG.style.width = `${tamanho_brancasG}%`

    //     /* ------- ARREDONDANDO SE SÓ ESTIVEREM ELAS -----*/

    // if (barra_duvidasG.style.width == `${100}%`) {
    //     barra_duvidasG.style.borderRadius = '10px 10px 10px 10px'
    //     barra_vermelhaG.style.display = 'none'
    //     barra_verdeG.style.display = 'none'
    //     barra_brancoG.style.display = 'none'

    // }

    // if (barra_vermelhaG.style.width == `${100}%`) {
    //     barra_vermelhaG.style.borderRadius = '10px 10px 10px 10px'
    //     barra_duvidasG.style.display = 'none'
    //     barra_verdeG.style.display = 'none'
    //     barra_brancoG.style.display = 'none'
    // }

    // if (barra_verdeG.style.width == `${100}%`) {
    //     barra_verdeG.style.borderRadius = '10px 10px 10px 10px'
    //     barra_duvidasG.style.display = 'none'
    //     barra_vermelhaG.style.display = 'none'
    //     barra_brancoG.style.display = 'none'
    // }

    // if (barra_brancoG.style.width == `${100}%`) {
    //     barra_brancoG.style.borderRadius = '10px 10px 10px 10px'
    //     barra_duvidasG.style.display = 'none'
    //     barra_vermelhaG.style.display = 'none'
    //     barra_verdeG.style.display = 'none'
    // }

})