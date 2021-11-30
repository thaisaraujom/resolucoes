const editar_cadastradas = document.querySelector(".editar-cadastradas")
const caixa_valor_mais = document.querySelectorAll(".caixa_valor_mais")

caixa_valor_mais.forEach((caixa_single)=> {
    const input_cadastradas = caixa_single.querySelector(".input_cadastradas")
    console.log(input_cadastradas);
    editar_cadastradas.addEventListener('click', ()=> {
        input_cadastradas.removeAttribute('disabled')
        editar_cadastradas.style.display = 'none'
    })
})



