// var caixas = [{
//     nome: "Valor",
// }];


// function carregarCampo() {
//     let caixa_valor_mais = document.querySelector(".caixa_valor_mais");
//     caixa_valor_mais.innerHTML = "";
//     caixas.forEach((el) => {
//         let nome = el.nome;
//         let caixa_container = `<div class="caixa_valor_mais">
//                                         <div class="caixa_individual">
//                                             <form class='form_box' action="">
//                                                 <div class="caixa_content">
//                                                     <img src="./assets/img/index_imagens/check_icone.svg" alt="">
//                                                     <input class="nome" placeholder="Valor" type="text" value="${nome}" />
//                                                 </div>


//                                                 <div class="action">
//                                                 <button class='button_salvar'><a href="#admin_valores" class="salvar">Salvar</a></button>
//                                                 <button class='button_apagar'><a href="#admin_valores" class="remover">Apagar</a></button>
//                                                 </div>
//                                             </form>
//                                         </div>

//                                     </div>`;
//         caixa_valor_mais.innerHTML += caixa_container;
//     });
//     salvarCampo();
//     removerCampo();
// }

// function removerCampo() {
//     document.querySelectorAll(".caixa_valor_mais .remover").forEach((el, i) => {
//         el.addEventListener("click", () => {
//             caixas.splice(i, 1);
//             carregarCampo();
//         });
//     });
// }

// function adicionarCampo() {
//     caixas.push({ nome: "" });
//     carregarCampo();
// }

// function salvarCampo() {
//     document.querySelectorAll(".caixa_valor_mais .salvar").forEach((el, i) => {
//         el.addEventListener("click", () => {
//             let nome = el.parentElement.parentElement.parentElement.querySelector(".nome").value;
//             console.log(nome);
//             caixas.splice(i, 1, { 
//                 nome: nome,
//             });
//             carregarCampo();
//         });
//     });
// }

//init
// const h3_admin = document.querySelector('.h3-values')
const hab_values = document.querySelector('.habilitar-mais-valores')

const caixa_valor_mais = document.querySelectorAll('.caixa_valor_mais')

const modal_editar = document.querySelector('.modal-editar')
const modal_apagar = document.querySelector('.modal-apagar')
const modal_cadastrar = document.querySelector('.modal-cadastrar')

const sairC = document.querySelector('.x-sairC')
const sairE = document.querySelector('.x-sairE')
const sairA = document.querySelector('.x-sairA')

const button_add = document.querySelector('#btnAdicionar')
const cancelar_modalA = document.querySelector('.cancelar-modalA')

// const line_quem_somos = document.querySelector('.line-values')
// const box_single = document.querySelector('.caixa-individual')



hab_values.addEventListener('click', () => {
    hab_values.style.display = 'none'

    button_add.addEventListener('click', ()=> {
        modal_cadastrar.style.visibility = 'visible'
    })
    sairC.addEventListener("click", ()=> {
        modal_cadastrar.style.visibility = 'hidden'
    })
    caixa_valor_mais.forEach((caixa_single) => {
        console.log(caixa_single)
        const button_editar = caixa_single.querySelector('.button-editar')
        const button_apagar = caixa_single.querySelector('.button-apagar')
        button_editar.addEventListener('click', () => {
            event.preventDefault()
            modal_editar.style.visibility = 'visible'
        })
        button_apagar.addEventListener('click', () => {
            event.preventDefault()
            modal_apagar.style.visibility = 'visible'
        })
        sairE.addEventListener("click", ()=> {
            modal_editar.style.visibility = 'hidden'
        })
        sairA.addEventListener("click", ()=> {
            modal_apagar.style.visibility = 'hidden'
        })
        cancelar_modalA.addEventListener("click", ()=> {
            event.preventDefault()
            modal_apagar.style.visibility = 'hidden'
        })
    })

    // line_quem_somos.classList.add('line-quem-somos-values-ativado')
    // h3_admin.classList.add('h3-titulo-admin-values-ativado')

    // document.querySelector("#btnAdicionar").addEventListener("click", adicionarCampo);
    // carregarCampo();
})




//capturarDados
// document.querySelector("#btnCapturarDados").addEventListener("click", ()=>{
// 	document.querySelector("#containerDados").innerHTML = JSON.stringify(caixas, undefined, 1);
// });