const admin_editavel = document.querySelectorAll('.admin-editavel')
console.log(admin_editavel)

admin_editavel.forEach((editar_single) => {
    const textArea = editar_single.querySelector('.textarea-editavel')
    const buttonSalvar = editar_single.querySelector('.button-salvar')
    const editarTextArea = editar_single.querySelector('.editar-secao-inicial')

    editarTextArea.addEventListener('click', () => {
        textArea.removeAttribute('disabled')
        editarTextArea.style.display = 'none'
        textArea.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.25)'
        textArea.style.borderRadius = '10px 10px 0 0'
        textArea.style.height = '100px'
        buttonSalvar.style.display = 'block'

    })
})
