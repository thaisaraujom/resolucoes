const moduloD = document.querySelectorAll('.modulosDM')

//Função passa por todos os modulos e os fecha
function toggleAccordion(arrAccordion) {
    for (let j = 0; j < arrAccordion.length; j++) {
        arrAccordion[j].querySelector('.conteudosD').classList.remove('ativar');
        arrAccordion[j].querySelector('.down-disciplina').classList.remove('active-arrow');
        arrAccordion[j].querySelector('.down-disciplina').style.display = 'flex'
        arrAccordion[j].querySelector('.drop-disciplina').style.display = 'none'
    };
};

moduloD.forEach((modulo_single) => {
    //expandir barra
    var botaoD = modulo_single.querySelector('.down-disciplina')
    var botaoD2 = modulo_single.querySelector('.drop-disciplina')

    var conteudoMD = modulo_single.querySelector('.conteudosD')

    botaoD.addEventListener('click', function () {
        //Antes de expandir, remover de todos os "módulos", a classe active das barras
        if (this.classList.contains('active-arrow')) {
            toggleAccordion(document.querySelectorAll('.modulosDM'));
        } else {
            toggleAccordion(document.querySelectorAll('.modulosDM'));
            botaoD.style.display = 'none'
            botaoD2.style.display = 'flex'
            conteudoMD.classList.add('ativar');
            this.classList.add('active-arrow');
        }
    })
    botaoD2.addEventListener('click', function () {
        //Antes de expandir, remover de todos os "módulos", a classe active das barras
        if (this.classList.contains('active-arrow')) {
            toggleAccordion(document.querySelectorAll('.modulosDM'));
        } else {
            toggleAccordion(document.querySelectorAll('.modulosDM'));
            botaoD.style.display = 'flex'
            botaoD2.style.display = 'none'
            conteudoMD.classList.remove('ativar');
            this.classList.remove('active-arrow');
        }
    })
})