
//Modal das questões existentes

modalQuestao = document.querySelector('.modal-finalizar-overlay.modal-questao')

function AbrirModal1() {
    modalQuestao.style.visibility = 'visible '
    modalAdd.style.visibility = 'hidden'
}

function FecharModal1() {
    modalQuestao.style.visibility = 'hidden'
}

//Modal do btn adicionar questão

modalAdd = document.querySelector('.modal-finalizar-overlay.modal-add')

function AbrirModal2() {
    modalAdd.style.visibility = 'visible '
}

function FecharModal2() {
    modalAdd.style.visibility = 'hidden'
}

//Modal deletar

modalDelete = document.querySelector('.modal-finalizar-overlay.delete')

function AbrirModal3() {
    modalDelete.style.visibility = 'visible '
}

function FecharModal3() {
    modalDelete.style.visibility = 'hidden'
}