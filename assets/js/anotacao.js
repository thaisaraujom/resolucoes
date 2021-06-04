const anotacao = document.querySelector(".anotacao--page__body");
const anotacaoEdit = document.querySelector("#anotacao--controls__edit");
const anotacaoRemove = document.querySelector("#anotacao--controls__remove");
const btnSalvar = document.querySelector(".anotacao--page__salvar-alteracoes-btn");

anotacaoEdit.addEventListener('click', ()=>{
    anotacao.setAttribute("contentEditable", "true");
    anotacao.focus();
    document.querySelector('.anotacao__date-time').remove();
    btnSalvar.style.display = "block";
})


btnSalvar.addEventListener('click', () => {
    btnSalvar.style.display = "none";
})