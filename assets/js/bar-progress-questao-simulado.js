let barra_total = document.querySelectorAll('.barra-total');
barra_total.forEach((barra_pequena)=>{
    let total_questoes_barrinha = barra_pequena.dataset.questions
    let barra_verde_p = barra_pequena.querySelector('.barra-completa')
    let questoes_feitas = Number(barra_pequena.querySelector('.barra-concluidas').innerHTML)
    const tamanho_verde_p = (100 * questoes_feitas) /total_questoes_barrinha
    barra_verde_p.style.width = `${tamanho_verde_p}%`

})