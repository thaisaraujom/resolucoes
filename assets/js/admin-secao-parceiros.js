function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  var output = [];
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);


/* ADICIONAR --------------------------------------------------------------------------- */
const adicionar_mais = document.querySelector('.parceiros_mais')
const adicionar = document.getElementById("parceiros_mais")
const caixa_parceiro = document.querySelector(".caixas_parceiro_mais")
var cont = 2


/* HABILITAR EDIÇÃO TÍTULO --------------------------------------------------------------------------- */

const habilitar_editar_input = document.querySelector('.habilitar-mais-valores')
const input_ativar = document.querySelector('.input-a-ativar')
const button_salvar = document.querySelector('.button-salvar-margin')
const parceiros_mais = document.querySelector('.parceiros_mais')
const input_titulo = document.querySelector('.h3-titulo-admin.h3-values.input-titulo')
var line_nossos_parceiros = document.querySelector('.line-esquerda.line-nossos-parceiros')
console.log(line_nossos_parceiros);

habilitar_editar_input.addEventListener('click', () => {
  input_ativar.classList.add('input-ativado')
  parceiros_mais.style.display = 'none'
  habilitar_editar_input.style.display = 'none'
  button_salvar.style.display = 'block'
  line_nossos_parceiros.classList.add('line-nossos-parceiros-column')
  input_titulo.removeAttribute('disabled')
})

/* FIM HABILITAR EDIÇÃO TÍTULO --------------------------------------------------------------------------- */

/* ABRIR/FECHAR MODAL --------------------------------------------------------------------------- */
const modal_adicionar_parceiro = document.querySelector('.modal-finalizar-overlay')
const x_sair = document.querySelector('.x-sair')
// habilitar_editar_input.addEventListener('click', () => {
//   habilitar_editar_input.style.display = 'none'
adicionar_mais.addEventListener('click', () => {
  modal_adicionar_parceiro.style.visibility = 'visible'
  // createDiv()
  // cont = cont + 1
})
// })

x_sair.addEventListener('click', ()=> {
  modal_adicionar_parceiro.style.visibility = 'hidden'
})


/* FIM ABRIR/FECHAR MODAL --------------------------------------------------------------------------- */


/* ADICIONAR DIV --------------------------------------------------------------------------- */
// function createDiv() {

//   let div_caixa_parceiro = document.createElement("div");
//   let div_caixa_individual = document.createElement("div");
//   let div_caixa_content_parceiros = document.createElement("div");
//   let div_campo_file = document.createElement("div");

//   let div_nome_parceiro_single = document.createElement("div");
//   let label = document.createElement("label");
//   let input_parceiro = document.createElement("input");
//   let input_file = document.createElement('input')

//   div_caixa_parceiro.setAttribute('class', 'caixa_valor_mais caixa_parceiro_mais')
//   div_caixa_individual.setAttribute('class', 'caixa_individual')
//   div_caixa_content_parceiros.setAttribute('class', 'caixa_content caixa_content_parceiros')
//   div_campo_file.setAttribute('class', 'campo campo_file')
//   div_nome_parceiro_single.setAttribute('class', 'nome_parceiro_single')

//   label.setAttribute('class', 'file_label')
//   label.textContent = `${'Nome '}` + cont + ':';

//   input_parceiro.setAttribute('class', 'nome_parceiro')
//   input_parceiro.setAttribute('placeholder', 'Sed ante leo')
//   input_parceiro.setAttribute('type', 'text')
//   input_parceiro.setAttribute('disabled', 'disabled')

//   input_file.setAttribute('class', 'file_input')
//   input_file.setAttribute('type', 'file')
//   input_file.setAttribute('id', 'files')
//   input_file.setAttribute('name', 'file')
//   input_file.setAttribute('disabled', 'disabled')

//   var divs_dentro = box_input.appendChild(div_caixa_parceiro).appendChild(div_caixa_individual).appendChild(div_caixa_content_parceiros).appendChild(div_campo_file)

//   divs_dentro.appendChild(div_nome_parceiro_single).appendChild(label)
//   divs_dentro.appendChild(div_nome_parceiro_single).appendChild(input_parceiro)
//   divs_dentro.appendChild(input_file)

// }

/* FIM ADICIONAR DIV --------------------------------------------------------------------------- */