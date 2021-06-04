let barra_feitas = document.querySelector('.bar_feitas');

let total_questoes_feitas = barra_feitas.dataset.questions
let bar_laranja = barra_feitas.querySelector('.bar_feitas_progresso')
let qtd_questoes_feitas = Number(barra_feitas.querySelector('.progresso_feitas').innerHTML)
const tamanho_laranja= (100 * qtd_questoes_feitas) /total_questoes_feitas
bar_laranja.style.width = `${tamanho_laranja}%`

document.querySelector('.ja_feita').innerHTML = tamanho_laranja.toFixed(1) + '%'

/* ------------------------------- QUESTÕES FEITAS OU NÃO --------------------------------------- */
let numero_questao_link = document.querySelectorAll('.numero-questao-link');
numero_questao_link.forEach((numero_single)=>{
    let questao_link = numero_single.dataset.questions
    let paragrafo_link = numero_single.querySelector('.p-link')

    if (questao_link == 'respondida') {
        paragrafo_link.style.color = "#7F7878"
    } else if (questao_link == 'nao-respondida') {
        paragrafo_link.style.color = "#453939"
    }
})


