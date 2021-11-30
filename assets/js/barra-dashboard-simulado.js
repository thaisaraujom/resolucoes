//Tenho todas as questões

//Tenho todas as questões "Fácil"
// Fiz todas

//Tenho todas as questões "Médio"
// Fiz 9 de 15

//Tenho todas as questões "Difícil"
// Não fiz nenhuma

let bar_dificuldade = document.querySelectorAll('.bar_dificuldade')

console.log(bar_dificuldade);

bar_dificuldade.forEach((barra) => {
    let total_questoes = barra.dataset.questions
    
    let bar_concluidas = barra.querySelector('.bar_concluidas')

    let questoes_concluidas = barra.querySelector('.nivel-barra').innerHTML

    let questoes_concluidasClasse = barra.querySelector('.nivel')
    
    const tamanho_bar = (100 * questoes_concluidas) / total_questoes;

    bar_concluidas.style.width = `${tamanho_bar}%`

    let nivel = barra.querySelector('.nivel')
    nivel.innerHTML = (tamanho_bar.toFixed(0)) +'%'
    

    if (tamanho_bar == 0) {
        questoes_concluidasClasse.style.position = 'absolute'
    }

})