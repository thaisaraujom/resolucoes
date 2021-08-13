var caixas = [{
    nome: "Valor",
}];


function carregarCampo() {
    let caixa_valor_mais = document.querySelector(".caixa_valor_mais");
    caixa_valor_mais.innerHTML = "";
    caixas.forEach((el) => {
        let nome = el.nome;
        let caixa_container = `<div class="caixa_valor_mais">
                                        <div class="caixa_individual">
                                            <form class='form_box' action="">
                                                <div class="caixa_content">
                                                    <img src="./assets/img/index_imagens/check_icone.svg" alt="">
                                                    <input class="nome" placeholder="Valor" type="text" value="${nome}" />
                                                </div>
            
            
                                                <div class="action">
                                                <button class='button_salvar'><a href="#admin_valores" class="salvar">Salvar</a></button>
                                                <button class='button_apagar'><a href="#admin_valores" class="remover">Apagar</a></button>
                                                </div>
                                            </form>
                                        </div>
                                        
                                    </div>`;
        caixa_valor_mais.innerHTML += caixa_container;
    });
    salvarCampo();
    removerCampo();
}

function removerCampo() {
    document.querySelectorAll(".caixa_valor_mais .remover").forEach((el, i) => {
        el.addEventListener("click", () => {
            caixas.splice(i, 1);
            carregarCampo();
        });
    });
}

function adicionarCampo() {
    caixas.push({ nome: "" });
    carregarCampo();
}

function salvarCampo() {
    document.querySelectorAll(".caixa_valor_mais .salvar").forEach((el, i) => {
        el.addEventListener("click", () => {
            let nome = el.parentElement.parentElement.parentElement.querySelector(".nome").value;
            console.log(nome);
            caixas.splice(i, 1, { 
                nome: nome,
            });
            carregarCampo();
        });
    });
}

//init
// const h3_admin = document.querySelector('.h3-values')
const hab_values = document.querySelector('.habilitar-mais-valores')
const button_opcao_admin = document.querySelector('.button_opcao-admin')
// const line_quem_somos = document.querySelector('.line-values')
// const box_single = document.querySelector('.caixa-individual')



hab_values.addEventListener('click', ()=> {
    button_opcao_admin.style.display = 'flex'
    button_opcao_admin.style.display = 'flex'
    hab_values.style.display = 'none'
 
    // line_quem_somos.classList.add('line-quem-somos-values-ativado')
    // h3_admin.classList.add('h3-titulo-admin-values-ativado')

    document.querySelector("#btnAdicionar").addEventListener("click", adicionarCampo);
    carregarCampo();
})




//capturarDados
document.querySelector("#btnCapturarDados").addEventListener("click", ()=>{
	document.querySelector("#containerDados").innerHTML = JSON.stringify(caixas, undefined, 1);
});
