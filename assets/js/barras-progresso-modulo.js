
// let barra_total = document.querySelectorAll('.barra-totalM');
// let completo = document.querySelector('.concluido')
// barra_total.forEach((barra_pequena) => {
//     let total_questoes_barrinha = barra_pequena.dataset.questions
//     let barra_verde_p = barra_pequena.querySelector('.barra-completaM')
//     let questoes_feitas = Number(barra_pequena.querySelector('.barra-concluidasM').innerHTML)
//     const tamanho_verde_p = (100 * questoes_feitas) / total_questoes_barrinha
//     barra_verde_p.style.width = `${tamanho_verde_p}%`

//     if (tamanho_verde_p == 100) {
//         completo.style.visibility = 'visible'
//     }
// })


const moduloCompleto = (barraTotal, barraCompleta, barraConcluida, fazerAparecer) => {
    let barra_total = document.querySelectorAll(barraTotal)
    let completo = document.querySelector(fazerAparecer)

    barra_total.forEach((barra_pequena) => {
        let total_questoes_barrinha = barra_pequena.dataset.questions
        let barra_verde_p = barra_pequena.querySelector(barraCompleta)
        let questoes_feitas = Number(barra_pequena.querySelector(barraConcluida).innerHTML)
        const tamanho_verde_p = (100 * questoes_feitas) / total_questoes_barrinha
        barra_verde_p.style.width = `${tamanho_verde_p}%`

        if (tamanho_verde_p == 100) {
            completo.style.visibility = 'visible'
        }
    })  
}

const iconCompleto = () => {
    moduloCompleto('.barra-totalM', '.barra-completaM', '.barra-concluidasM', '.concluido1')
    moduloCompleto('.barra-totalM', '.barra-completaM', '.barra-concluidasM', '.concluido2')
    moduloCompleto('.barra-totalM', '.barra-completaM', '.barra-concluidasM', '.concluido3')
    moduloCompleto('.barra-totalM', '.barra-completaM', '.barra-concluidasM', '.concluido4')
}

iconCompleto()
