const questaoEnunciadoPre = document.getElementById('questao-enunciado-pre');
const questaoEnunciadoPos = document.getElementById('questao-enunciado-pos');
const questaoImagem = document.getElementById('questao-imagem');
const alternativas = Array.from(document.getElementsByClassName('alternativa-text'));
const numeroQuestao = document.getElementById('num-question');
const numeroDeQuestoes = document.getElementById('numero-de-questoes');

let questaoAtual = {};
let questaoCont = 0;
let questoesDisponiveis = [];

// Criand array para as questões
let questoes = []
// Pegando questoes via fetch api
fetch("https://hudsoneject.pythonanywhere.com/simulacao/api/matematica"
    ).then( res => {
        return res.json();
    })
    .then(questoesCarregadas => {
        questoes = questoesCarregadas; 
        // inicializando o questionario
        startQuestionario()
    })
    .catch(err =>{
        console.error(err);
    });

// Criando array das respostas do aluno
const respostasAluno = [];

// Função que inicia um questionário
startQuestionario = () => {
    questaoCont =-1;  
    // Seprando cada questão para poder manipula-las como em uma array - spread
    questoesDisponiveis = [...questoes];    
    getNovaQuestao();
}

// Coloca evento em cada alternativa que pega qual foi selecionada
alternativas.forEach((alternativa) => {
    alternativa.addEventListener('click', (e) => {
        const numeroDaAlernativa = e.target.dataset["numero"];                 
    });
});

// Pega uma nova questão do "banco de questões"
getNovaQuestao = () => {
    // Desabilitando/Habilitando botão Questão anterior quando necessário
    if(questaoCont == 0){
        document.querySelector("#footer > div.back").setAttribute('style', `
            opacity : 0.5;
            pointer-events: none;
        `)
    }else{
        document.querySelector("#footer > div.back").setAttribute('style', `
        opacity : 1;
        pointer-events: auto;
        cursor: pointer;`
        )    
    }
    // Desabilitando/Habilitando botão Proxima questão quando necessário
    if(questaoCont === (questoesDisponiveis.length) -1){
        document.querySelector("#footer > div.next").setAttribute('style', `
        opacity : 0.5;` 
        )
    }else{
        document.querySelector("#footer > div.next").setAttribute('style', `
        opacity : 1;
        pointer-events: auto;
        cursor: pointer;`
        )
    }

    if(questaoCont == questoesDisponiveis.length){
        window.alert("Questionario Finalizado");
        return window.location.assign("pagina-questao-desempenho.html");
    }
    // Jogando a resposta da questão atual para uma array de respostas do aluno no localStorage, antes de carregar uma nova questão
    const radioAlternativas = Array.from(document.getElementsByName('gender'));
    radioAlternativas.forEach( radio => {
        if(radio.checked) {
            respostasAluno.push(radio.value)
            localStorage.setItem("Respostas do Aluno", JSON.stringify(respostasAluno));
            radio.checked = false;
            respondido = true;
        }
    });  

    questaoCont++; 
    // Pegando uma questao no repositorio
    questaoAtual = questoesDisponiveis[questaoCont];
    // Jogando dados na questão no DOM
    numeroQuestao.innerText = questaoCont+1;
    numeroDeQuestoes.innerText = questoesDisponiveis.length;
    questaoEnunciadoPre.innerText = questaoAtual["enunciado_pre"];
    questaoEnunciadoPos.innerText = questaoAtual["enunciado_pos"];
    questaoImagem.src = questaoAtual.imagem;
    alternativas.forEach( alternativa => {
        const numeroAlternativa = alternativa.dataset["numero"];        
        alternativa.innerText = questaoAtual["questao"][numeroAlternativa]["texto"];
    });
};

retornaQuestao = () => {
    if(questaoCont > 1){
        questaoCont--; 
        // Pegando uma questao no repositorio
        questaoAtual = questoesDisponiveis[questaoCont];
        // Jogando dados na questão no DOM
        numeroQuestao.innerText = questaoCont;
        numeroDeQuestoes.innerText = questoesDisponiveis.length;
        questaoEnunciadoPre.innerText = questaoAtual["enunciado_pre"];
        questaoEnunciadoPos.innerText = questaoAtual["enunciado_pos"];
        questaoImagem.src = questaoAtual.imagem;
        alternativas.forEach( alternativa => {
            const numeroAlternativa = alternativa.dataset["numero"];
            alternativa.innerText = questaoAtual["questao"][numeroAlternativa]["texto"];
        });
    }else{
        
    }
}



