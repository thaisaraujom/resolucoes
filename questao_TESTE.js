<<<<<<< HEAD
const questaoEnunciadoPre = document.getElementById('questao-enunciado-pre');
const questaoEnunciadoPos = document.getElementById('questao-enunciado-pos');
const questaoImagem = document.getElementById('questao-imagem');
const alternativas = Array.from(document.getElementsByClassName('alternativa-text'));
const numeroQuestao = document.getElementById('num-question');
const numeroDeQuestoes = document.getElementById('numero-de-questoes');
=======
const questaoEnunciadoPre = document.getElementById("questao-enunciado-pre");
const questaoEnunciadoPos = document.getElementById("questao-enunciado-pos");
const questaoImagem = document.getElementById("questao-imagem");
const alternativas = Array.from(
  document.getElementsByClassName("alternativa-text")
);
const numeroQuestao = document.getElementById("num-question");
const numeroDeQuestoes = document.getElementById("numero-de-questoes");
>>>>>>> 90626ee235f10c6ee3414449add53957fe475e3e

let questaoAtual = {};
let questaoCont = 0;
let questoesDisponiveis = [];
<<<<<<< HEAD

// Criand array para as questões
let questoes = []
// Pegando questoes via fetch api
fetch("questoes.json"
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

=======
// T
// Criand array para as questões
let questoes = [];
// Pegando questoes via fetch api
fetch("questoes.json")
  .then((res) => {
    return res.json();
  })
  .then((questoesCarregadas) => {
    questoes = questoesCarregadas;
    // inicializando o questionario
    startQuestionario();
  })
  .catch((err) => {
    console.error(err);
  });
>>>>>>> 90626ee235f10c6ee3414449add53957fe475e3e

// Numero de questoes do questionario
const MAX_QUESTOES = 5;
// Criando array das respostas do aluno
const respostasAluno = [];

// Função que inicia um questionário
startQuestionario = () => {
<<<<<<< HEAD
    questaoCont = 0;  
    // Seprando cada questão para poder manipula-las como em uma array - spread
    questoesDisponiveis = [...questoes];
    getNovaQuestao();
}

// Coloca evento em cada alternativa que pega qual foi selecionada
alternativas.forEach((alternativa) => {
    alternativa.addEventListener('click', (e) => {
          const numeroDaAlernativa = e.target.dataset["numero"];
                 
    });
=======
  questaoCont = 0;
  // Seprando cada questão para poder manipula-las como em uma array - spread
  questoesDisponiveis = [...questoes];
  getNovaQuestao();
};

// Coloca evento em cada alternativa que pega qual foi selecionada
alternativas.forEach((alternativa) => {
  alternativa.addEventListener("click", (e) => {
    const numeroDaAlernativa = e.target.dataset["numero"];
  });
>>>>>>> 90626ee235f10c6ee3414449add53957fe475e3e
});

// Pega uma nova questão do "repositorio"
getNovaQuestao = () => {
<<<<<<< HEAD
    if(questoesDisponiveis.length === 0 || questaoCont >= MAX_QUESTOES){
        window.alert("Questionario Finalizado");
        return window.location.assign("pagina-questao-desempenho.html");
    }
    // Jogando a resposta da questão atual para uma array de respostas do aluno no localStorage, antes de carregar uma nova questão
    const radioAlternativas = Array.from(document.getElementsByName('gender'));
    let respondido = false;
    radioAlternativas.forEach( radio => {
        if(radio.checked) {
            respostasAluno.push(radio.value)
            localStorage.setItem("Respostas do Aluno", JSON.stringify(respostasAluno));
            radio.checked = false;
            respondido = true;
        }
    });
    // if (respondido == false){
    //     respostasAluno.push("")
    //     localStorage.setItem("Respostas do Aluno", JSON.stringify(respostasAluno));
    // }
  

    questaoCont++;
    // Gerando umnumero aleatorio para pegar uma questao aleatoriamente no repositorio
    const questaoIndex = Math.floor(Math.random() * questoesDisponiveis.length);
    // Pegando uma questao aleatoriamente no repositorio
    questaoAtual = questoesDisponiveis[questaoIndex];
    // Jogando dados na questão no DOM
    numeroQuestao.innerText = questaoCont;
    numeroDeQuestoes.innerText = MAX_QUESTOES;
    questaoEnunciadoPre.innerText = questaoAtual.enunciadoPre;
    questaoEnunciadoPos.innerText = questaoAtual.enunciadoPos;
    questaoImagem.src = questaoAtual.imagem;
    alternativas.forEach( alternativa => {
        const numeroAlternativa = alternativa.dataset["numero"];
        alternativa.innerText = questaoAtual["alternativa" + numeroAlternativa];
    });
    // Removendo a questão atual da lista de proximas questoes - evitar repetição
    questoesDisponiveis.splice(questaoIndex, 1);

};




=======
  if (questoesDisponiveis.length === 0 || questaoCont >= MAX_QUESTOES) {
    window.alert("Questionario Finalizado");
    return window.location.assign("pagina-questao-desempenho.html");
  }
  // Jogando a resposta da questão atual para uma array de respostas do aluno no localStorage, antes de carregar uma nova questão
  const radioAlternativas = Array.from(document.getElementsByName("gender"));
  let respondido = false;
  radioAlternativas.forEach((radio) => {
    if (radio.checked) {
      respostasAluno.push(radio.value);
      localStorage.setItem(
        "Respostas do Aluno",
        JSON.stringify(respostasAluno)
      );
      radio.checked = false;
      respondido = true;
    }
  });
  // if (respondido == false){
  //     respostasAluno.push("")
  //     localStorage.setItem("Respostas do Aluno", JSON.stringify(respostasAluno));
  // }

  questaoCont++;
  // Gerando umnumero aleatorio para pegar uma questao aleatoriamente no repositorio
  const questaoIndex = Math.floor(Math.random() * questoesDisponiveis.length);
  // Pegando uma questao aleatoriamente no repositorio
  questaoAtual = questoesDisponiveis[questaoIndex];
  // Jogando dados na questão no DOM
  numeroQuestao.innerText = questaoCont;
  numeroDeQuestoes.innerText = MAX_QUESTOES;
  questaoEnunciadoPre.innerText = questaoAtual.enunciadoPre;
  questaoEnunciadoPos.innerText = questaoAtual.enunciadoPos;
  questaoImagem.src = questaoAtual.imagem;
  alternativas.forEach((alternativa) => {
    const numeroAlternativa = alternativa.dataset["numero"];
    alternativa.innerText = questaoAtual["alternativa" + numeroAlternativa];
  });
  // Removendo a questão atual da lista de proximas questoes - evitar repetição
  questoesDisponiveis.splice(questaoIndex, 1);
};
>>>>>>> 90626ee235f10c6ee3414449add53957fe475e3e
