const admin_editavel = document.querySelectorAll('.admin-editavel')

admin_editavel.forEach((editar_single) => {
    const textArea = editar_single.querySelector('.textarea-editavel')
    const textAreaAtivado = editar_single.querySelector('.textarea-editavel-ativado')
    const buttonSalvar = editar_single.querySelector('.button-salvar')
    const editarTextArea = editar_single.querySelector('.editar-secao-inicial')
    const h3_admin = editar_single.querySelector('.h3-titulo-admin')
    const line_quem_somos = editar_single.querySelector('.line-quem-somos')

    editarTextArea.addEventListener('click', () => {
        textArea.removeAttribute('disabled')
        editarTextArea.style.display = 'none'
        textArea.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.25)'
        textArea.style.borderRadius = '10px 10px 0 0'
        textAreaAtivado.style.borderRadius = '0'
        textArea.style.height = '100px'
        buttonSalvar.style.display = 'block'
        line_quem_somos.classList.add('line-quem-somos-ativado')
        h3_admin.classList.add('h3-titulo-admin-ativado')

    })
})
