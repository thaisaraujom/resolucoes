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

/* --------------------------- APARECER CHECK E BARRA GRANDE - MÓDULO ------------------------------ */
const modulo = document.querySelectorAll('.modulo')
var contador = 0

modulo.forEach((modulo_single) => {
    //expandir barra
    var botao = modulo_single.querySelector('.expandir-barraM')
    var botao1 = modulo_single.querySelector('.expandir-barraMd')
    var barraG = modulo_single.querySelector('.bar_full')
    var cap = modulo_single.querySelector('.capitulos')

    botao.addEventListener('click', function () {
        barraG.classList.add('active')
        cap.classList.add('ativar')
        botao.style.display = 'none'
        botao1.style.display = 'flex'

    })
    botao1.addEventListener('click', function () {
        barraG.classList.remove('active')
        cap.classList.remove('ativar')
        botao1.style.display = 'none'
        botao.style.display = 'flex'
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

    /* ------- ARREDONDANDO SE SÓ ESTIVEREM ELAS -----*/

    if (barra_duvidasG.style.width == `${100}%`) {
        barra_duvidasG.style.borderRadius = '10px 10px 10px 10px'
        barra_vermelhaG.style.display = 'none'
        barra_verdeG.style.display = 'none'
        barra_brancoG.style.display = 'none'

    }

    if (barra_vermelhaG.style.width == `${100}%`) {
        barra_vermelhaG.style.borderRadius = '10px 10px 10px 10px'
        barra_duvidasG.style.display = 'none'
        barra_verdeG.style.display = 'none'
        barra_brancoG.style.display = 'none'
    }

    if (barra_verdeG.style.width == `${100}%`) {
        barra_verdeG.style.borderRadius = '10px 10px 10px 10px'
        barra_duvidasG.style.display = 'none'
        barra_vermelhaG.style.display = 'none'
        barra_brancoG.style.display = 'none'
    }

    if (barra_brancoG.style.width == `${100}%`) {
        barra_brancoG.style.borderRadius = '10px 10px 10px 10px'
        barra_duvidasG.style.display = 'none'
        barra_vermelhaG.style.display = 'none'
        barra_verdeG.style.display = 'none'
    }

    /* ------- 3 BARRAS -----*/

    /* ------------------- VERDE + LARANJA + VERMELHA ---------------------- */
    if (barra_brancoG.style.width == `${0}%` && barra_vermelhaG.style.width != `${100}%`) {
        barra_vermelhaG.style.borderRadius = '0px 10px 10px 0px'
        barra_brancoG.style.display = 'none'
    }

    /* ------------------- VERDE + BRANCA + VERMELHA ---------------------- */
    if (barra_duvidasG.style.width == `${0}%` && barra_vermelhaG.style.width != `${100}%` && barra_brancoG.style.width != `${100}%` && barra_verdeG.style.width != `${100}%` ) {
        barra_duvidasG.style.display = 'none'
    }

    /* ------------------- LARANJA + VERMELHA + BRANCO ---------------------- */
    if (barra_verdeG.style.width == `${0}%` &&  barra_duvidasG.style.width != `${100}%`) {
        barra_duvidasG.style.borderRadius = '10px 0px 0px 10px'
        barra_verdeG.style.display = 'none'
    }

    /* ------- 2 BARRAS -----*/

    /* -------------------  VERDE + LARANJA + VERMELHA + BRANCA ---------------------- */

    /* VERDE + LARANJA */
    if (barra_vermelhaG.style.width == `${0}%` && barra_brancoG.style.width == `${0}%` &&  barra_duvidasG.style.width != `${100}%`) {
        barra_duvidasG.style.borderRadius = '0px 10px 10px 0px'
        barra_vermelhaG.style.display = 'none'
        barra_brancoG.style.display = 'none'
    }


    /* VERDE + VERMELHA */
    if (barra_duvidasG.style.width == `${0}%` && barra_brancoG.style.width == `${0}%` && barra_vermelhaG.style.width != `${100}%`) {
        barra_vermelhaG.style.borderRadius = '0px 10px 10px 0px'
        barra_duvidasG.style.display = 'none'
        barra_brancoG.style.display = 'none'
    }


    /* VERDE + BRANCA */
    if (barra_duvidasG.style.width == `${0}%` && barra_vermelhaG.style.width == `${0}%` &&  barra_brancoG.style.width != `${100}%`) {
        barra_brancoG.style.borderRadius = '0px 10px 10px 0px'
        barra_duvidasG.style.display = 'none'
        barra_vermelhaG.style.display = 'none'
    }



    /* LARANJA + VERMELHA */

    if (barra_brancoG.style.width == `${0}%` && barra_verdeG.style.width == `${0}%` && barra_vermelhaG.style.width != `${100}%`) {
        barra_vermelhaG.style.borderRadius = '0px 10px 10px 0px'
        barra_verdeG.style.display = 'none'
        barra_brancoG.style.display = 'none'
    }

    /* LARANJA + BRANCA */

    if (barra_vermelhaG.style.width == `${0}%` && barra_verdeG.style.width == `${0}%` &&  barra_brancoG.style.width != `${100}%`) {
        barra_brancoG.style.borderRadius = '0px 10px 10px 0px'
        barra_verdeG.style.display = 'none'
        barra_vermelhaG.style.display = 'none'
    }


    /* VERMELHA + BRANCA */

    if (barra_duvidasG.style.width == `${0}%` && barra_verdeG.style.width == `${0}%` &&  barra_brancoG.style.width != `${100}%`) {
        barra_brancoG.style.borderRadius = '0px 10px 10px 0px'
        barra_duvidasG.style.display = 'none'
        barra_verdeG.style.display = 'none'
    }

})

/* --------------------------- APARECER CHECK E BARRA GRANDE - CAPÍTULO ------------------------------ */
const capitulo = document.querySelectorAll('.capitulo')

capitulo.forEach((capitulo_single) => {
    //expandir barra

    var botaoSeta = capitulo_single.querySelector('.expandir-barraC')
    var botaoSeta1 = capitulo_single.querySelector('.expandir-barraCd')
    var barraGrande = capitulo_single.querySelector('.bar_full')

    botaoSeta.addEventListener('click', function () {
        barraGrande.classList.toggle('active')
        botaoSeta.style.display = 'none'
        botaoSeta1.style.display = 'flex'
    })

    botaoSeta1.addEventListener('click', function () {
        barraGrande.classList.toggle('active')
        botaoSeta.style.display = 'flex'
        botaoSeta1.style.display = 'none'
    })

    //ajustar o check
    var barra_todaC = capitulo_single.querySelector('.barra-totalM')

    var aparecerC = capitulo_single.querySelector('.concluidoC')

    var total_questoes_barrinhaC = barra_todaC.dataset.questions
    var questoesFeitasC = Number(capitulo_single.querySelector('.barra-concluidasM').innerHTML)
    const tamanho_barrinhaC = (100 * questoesFeitasC) / total_questoes_barrinhaC

    if (tamanho_barrinhaC == 100) {
        aparecerC.style.visibility = 'visible'
    }

    //barra grande

    var barra_todaGC = capitulo_single.querySelector('.bar_full')
    var barra_verdeGC = capitulo_single.querySelector('.bar_complete')
    var barra_vermelhaGC = capitulo_single.querySelector('.bar_erros')
    var barra_duvidasGC = capitulo_single.querySelector('.bar_duvidas')
    var barra_brancoGC = capitulo_single.querySelector('.bar_branco')

    var total_questoesGC = barra_todaGC.dataset.questions

    var questoes_completasGC = barra_todaGC.querySelector('.complete_questions').innerHTML
    var questoes_erradasGC = barra_todaGC.querySelector('.erros_questions').innerHTML
    var questoes_duvidasGC = barra_todaGC.querySelector('.duvidas_questions').innerHTML
    var questoes_brancoGC = barra_todaGC.querySelector('.white_questions').innerHTML

    const tamanho_vermelhoGC = (100 * questoes_erradasGC) / total_questoesGC;
    const tamanho_verdeGC = (100 * questoes_completasGC) / total_questoesGC;
    const tamanho_duvidasGC = (100 * questoes_duvidasGC) / total_questoesGC;
    const tamanho_brancasGC = (100 * questoes_brancoGC) / total_questoesGC;

    barra_duvidasGC.style.width = `${tamanho_duvidasGC}%`
    barra_vermelhaGC.style.width = `${tamanho_vermelhoGC}%`
    barra_verdeGC.style.width = `${tamanho_verdeGC}%`
    barra_brancoGC.style.width = `${tamanho_brancasGC}%`

    /* ------- ARREDONDANDO SE SÓ ESTIVEREM ELAS -----*/

    if (barra_duvidasGC.style.width == `${100}%`) {
        barra_duvidasGC.style.borderRadius = '10px 10px 10px 10px'
        barra_vermelhaGC.style.display = 'none'
        barra_verdeGC.style.display = 'none'
        barra_brancoGC.style.display = 'none'

    }

    if (barra_vermelhaGC.style.width == `${100}%`) {
        barra_vermelhaGC.style.borderRadius = '10px 10px 10px 10px'
        barra_duvidasGC.style.display = 'none'
        barra_verdeGC.style.display = 'none'
        barra_brancoGC.style.display = 'none'
    }

    if (barra_verdeGC.style.width == `${100}%`) {
        barra_verdeGC.style.borderRadius = '10px 10px 10px 10px'
        barra_duvidasGC.style.display = 'none'
        barra_vermelhaGC.style.display = 'none'
        barra_brancoGC.style.display = 'none'
    }

    if (barra_brancoGC.style.width == `${100}%`) {
        barra_brancoGC.style.borderRadius = '10px 10px 10px 10px'
        barra_duvidasGC.style.display = 'none'
        barra_vermelhaGC.style.display = 'none'
        barra_verdeGC.style.display = 'none'
    }

    /* ------- 3 BARRAS -----*/

    /* ------------------- VERDE + LARANJA + VERMELHA ---------------------- */
    if (barra_brancoGC.style.width == `${0}%` && barra_vermelhaGC.style.width != `${100}%`) {
        barra_vermelhaGC.style.borderRadius = '0px 10px 10px 0px'
        barra_brancoGC.style.display = 'none'
    }

       /* ------------------- VERDE + BRANCA + VERMELHA ---------------------- */
       if (barra_duvidasGC.style.width == `${0}%` && barra_vermelhaGC.style.width != `${100}%` && barra_brancoGC.style.width != `${100}%` && barra_verdeGC.style.width != `${100}%` ) {
        barra_duvidasGC.style.display = 'none'
    }

    /* ------------------- LARANJA + VERMELHA + BRANCO ---------------------- */
    if (barra_verdeGC.style.width == `${0}%` && barra_duvidasGC.style.width != `${100}%`) {
        barra_duvidasGC.style.borderRadius = '10px 0px 0px 10px'
        barra_verdeGC.style.display = 'none'
    }

    /* ------- 2 BARRAS -----*/

    /* -------------------  VERDE + LARANJA + VERMELHA + BRANCA ---------------------- */

    /* VERDE + LARANJA */
    if (barra_vermelhaGC.style.width == `${0}%` && barra_brancoGC.style.width == `${0}%` && barra_duvidasGC.style.width != `${100}%`) {
        barra_duvidasGC.style.borderRadius = '0px 10px 10px 0px'
        barra_vermelhaGC.style.display = 'none'
        barra_brancoGC.style.display = 'none'
    }


    /* VERDE + VERMELHA */
    if (barra_duvidasGC.style.width == `${0}%` && barra_brancoGC.style.width == `${0}%` && barra_vermelhaGC.style.width != `${100}%`) {
        barra_vermelhaGC.style.borderRadius = '0px 10px 10px 0px'
        barra_duvidasGC.style.display = 'none'
        barra_brancoGC.style.display = 'none'
    }


    /* VERDE + BRANCA */
    if (barra_duvidasGC.style.width == `${0}%` && barra_vermelhaGC.style.width == `${0}%` && barra_brancoGC.style.width != `${100}%`) {
        barra_brancoGC.style.borderRadius = '0px 10px 10px 0px'
        barra_duvidasGC.style.display = 'none'
        barra_vermelhaGC.style.display = 'none'
    }



    /* LARANJA + VERMELHA */

    if (barra_brancoGC.style.width == `${0}%` && barra_verdeGC.style.width == `${0}%` && barra_vermelhaGC.style.width != `${100}%`) {
        barra_vermelhaGC.style.borderRadius = '0px 10px 10px 0px'
        barra_verdeGC.style.display = 'none'
        barra_brancoGC.style.display = 'none'
    }

    /* LARANJA + BRANCA */

    if (barra_vermelhaGC.style.width == `${0}%` && barra_verdeGC.style.width == `${0}%` && barra_brancoGC.style.width != `${100}%`) {
        barra_brancoGC.style.borderRadius = '0px 10px 10px 0px'
        barra_verdeGC.style.display = 'none'
        barra_vermelhaGC.style.display = 'none'
    }


    /* VERMELHA + BRANCA */

    if (barra_duvidasGC.style.width == `${0}%` && barra_verdeGC.style.width == `${0}%` && barra_brancoGC.style.width != `${100}%`) {
        barra_brancoGC.style.borderRadius = '0px 10px 10px 0px'
        barra_duvidasGC.style.display = 'none'
        barra_verdeGC.style.display = 'none'
    }

})

