function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  var output = [];
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

/* --------------------------------------------------------------------------- */
const adicionar = document.getElementById("parceiros_mais");
const caixa_parceiro = document.querySelector(".caixas_parceiro_mais");

adicionar.addEventListener("click", function (event) {
  let div_caixa_parceiro = document.createElement("div");
  let div_caixa_individual = div_caixa_parceiro.createElement("div");
  let div_caixa_content_parceiros = div_caixa_individual.createElement("div");
  let div_campo_file = div_caixa_content_parceiros.createElement("div");

  let div_nome_parceiro_single = div_campo_file.createElement("div");
  let label = div_nome_parceiro_single.createElement("label");
  let input_parceiro = div_nome_parceiro_single.createElement("input");

  ing.name = "caixa_parceiro[]";
  ing.placeholder = "Ex: Cebola";
  ing.type = "text";
  let qtd = document.createElement("input");
  qtd.name = "qtd[]";
  qtd.placeholder = "Ex: ¹/² colher de café";
  qtd.type = "text";
  let pre = document.createElement("input");
  pre.name = "caixa_parceiro[]";
  pre.placeholder = "Ex: Picada";
  pre.type = "text";
  div.appendChild(ing);
  div.appendChild(qtd);
  div.appendChild(pre);
  caixa_parceiro.appendChild(div);
});