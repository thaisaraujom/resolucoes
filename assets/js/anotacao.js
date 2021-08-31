let anotacao = document.querySelector(".anotacao--page__body")
const anotacaoEdit = document.querySelector("#anotacao--controls__edit");
const anotacaoRemove = document.querySelector("#anotacao--controls__remove");
const btnSalvar = document.querySelector(".anotacao--page__salvar-alteracoes-btn");

anotacaoEdit.addEventListener('click', ()=>{
    anotacao.disabled=false;
    anotacao.focus();
    document.querySelector('.anotacao__date-time').style.display = "none";
    btnSalvar.style.display = "block";
})


btnSalvar.addEventListener('click', () => {
    localStorage.setItem( "anotação", anotacao.innerHTML )
    const newContent = localStorage.getItem("anotação");
    anotacao.removeAttribute("contentEditable");
    anotacao.innerHTML = newContent;
    btnSalvar.style.display = "none";   
    document.querySelector('.anotacao__date-time').style.display = "block";

})