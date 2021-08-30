/* HABILITAR EDIÇÃO P2*/
const habilitar_editar_input2 = document.querySelector('.editar-secao-inicial.habilitar-mais-valores.habilitar_input')
const input_a_ativar2 = document.querySelector('.input-a-ativar2')
const label_parceiros2 = document.querySelector('.file_label.label_parceiros2')
const nome_parceiro2 = document.querySelector('.nome_parceiro2')
const nome_parceiro_single2 = document.querySelector('.nome_parceiro_single2')
const label_margem = document.querySelector('.label_prc2')
const button_p2 = document.querySelector('.button-salvar-p2')
const apagar_parceiro = document.querySelector('.button-laranja2')
const file_input2 = document.querySelector('.file_input.file_input2')

habilitar_editar_input2.addEventListener('click', () => {
    input_a_ativar2.classList.add('input-ativado')
    habilitar_editar_input2.style.display = 'none'
    label_parceiros2.style.display = 'none'
    label_margem.style.marginRight = '0'
    apagar_parceiro.style.display = 'none'
    nome_parceiro2.removeAttribute('disabled')
    button_p2.style.display = 'block'
    nome_parceiro_single2.style.display = 'block'
    file_input2.removeAttribute('disabled')
})

/* FIM HABILITAR EDIÇÃO P2 */

/* ABRIR/FECHAR MODAL --------------------------------------------------------------------------- */
const modal_apagar_parceiro = document.querySelector('.modal-finalizar-overlay')
const x_sair = document.querySelector('.x-sair')
const button_cancelar_modal = document.querySelector('.button-cancelar-modal')

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

/* FIM ABRIR/FECHAR MODAL --------------------------------------------------------------------------- */