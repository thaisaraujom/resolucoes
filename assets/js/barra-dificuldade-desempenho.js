//Tenho todas as questões

//Tenho todas as questões "Fácil"
// Fiz todas

//Tenho todas as questões "Médio"
// Fiz 9 de 15

//Tenho todas as questões "Difícil"
// Não fiz nenhuma

let bar_dificuldade = document.querySelectorAll('.bar_dificuldade')



bar_dificuldade.forEach((barra) => {
    let total_questoes = barra.dataset.questions
    console.log(total_questoes);
    let bar_concluidas = barra.querySelector('.bar_concluidas')

    let questoes_concluidas = barra.querySelector('.nivel').innerHTML

    let questoes_concluidasClasse = barra.querySelector('.nivel')
    
    const tamanho_bar = (100 * questoes_concluidas) / total_questoes;

    bar_concluidas.style.width = `${tamanho_bar}%`

    if (tamanho_bar == 0) {
        questoes_concluidasClasse.style.position = 'absolute'
    }
})