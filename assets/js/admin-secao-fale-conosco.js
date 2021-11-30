const caixa_fale_conosco = document.querySelectorAll('.caixa_fale-conosco')
const caixas_fale_conosco = document.querySelector('.caixas_fale-conosco')
const buttonSalvar_input = document.querySelector('.button-salvar-fale') 
console.log(buttonSalvar_input);
const editar_input = document.querySelector('.editar-secao-inicial')
const h3_admin_fale_conosco = document.querySelector('.h3-titulo-admin') 
const line_quem_somos = document.querySelector('.line-quem-somos')

caixa_fale_conosco.forEach((editar_single) => {
    const input_editavel = editar_single.querySelector('.redeSocial')


    editar_input.addEventListener('click', () => {
        input_editavel.removeAttribute('disabled')
        editar_input.style.display = 'none'


        h3_admin_fale_conosco.classList.add('h3-titulo-admin-ativado')
        line_quem_somos.classList.add('line-quem-somos-ativado')

        caixas_fale_conosco.style.borderRadius = '0'

        buttonSalvar_input.style.marginTop = '1px'
        buttonSalvar_input.style.display = 'block'
        console.log(buttonSalvar_input);
    })

})