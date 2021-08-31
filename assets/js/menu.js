var hide = document.querySelector(".drop");
var tela1 = document.querySelector(".tela");
var navbar_lateral = document.querySelector("#navbar-lateral");

hide.addEventListener('click', function(){
    navbar_lateral.classList.remove("drop1");
    navbar_lateral.classList.add("nav-in");
    navbar_lateral.classList.remove("nav-out");
    tela1.classList.remove("hide");
})

tela1.addEventListener('click', function(){
    tela1.classList.add("hide");
    navbar_lateral.classList.add("nav-out");
    navbar_lateral.classList.remove("nav-in");
    navbar_lateral.classList.add("drop1");
})


