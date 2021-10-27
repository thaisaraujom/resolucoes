const sel = document.getElementById('materias-selector');
const cardsM =  Array.from(document.querySelectorAll('.cardM'));

sel.addEventListener('change', function(){
    for(let i=0; i < cardsM.length; i++){
        if(cardsM[i].dataset.item != sel.value){
            cardsM[i].classList.add('esconder-card');
            cardsM[i].classList.remove('active');
        }else{
            cardsM[i].classList.remove('active');
            cardsM[i].classList.remove('esconder-card');
        }
    }   
})


let options = Array.from(document.querySelectorAll("#materias-selector > option"))
options.forEach((opt) => {
  let optValue = opt.value
  let qtdAnotacoes = 0;
  let cont = document.querySelectorAll(`.cardM.${optValue}`)

  opt.innerHTML = opt.innerHTML + `<span class="qtd-anotacoes"> (${cont.length})</span>`
})


/* ABRIR/FECHAR MODAL --------------------------------------------------------------------------- */

const modal_apagar_parceiro = document.querySelector('.modal-finalizar-overlay')
const x_sair = document.querySelector('.x-sair')
const button_cancelar_modal = document.querySelector('.button-nao')

cardsM.forEach((card_single)=> {
    console.log(card_single)
    const apagar_parceiro = card_single.querySelector ('.anotacao_footer > i')

    apagar_parceiro.addEventListener('click', () => {
        event.preventDefault()
        modal_apagar_parceiro.style.visibility = 'visible'
    })
    x_sair.addEventListener('click', () => {
        event.preventDefault()
        modal_apagar_parceiro.style.visibility = 'hidden'
    })
    button_cancelar_modal.addEventListener('click', () => {
        event.preventDefault()
        modal_apagar_parceiro.style.visibility = 'hidden'
    })
})






/* FIM ABRIR/FECHAR MODAL --------------------------------------------------------------------------- */

