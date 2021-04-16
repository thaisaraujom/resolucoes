$('.reveal').click(function () {
    $(this).slideUp(100);
    $(this).next().slideToggle();
    $(".collapse").slideDown(100);
});
$('.collapse').click(function () {
    $(this).slideUp(100);
    $(this).prev().slideToggle();
    $(".reveal").slideDown(100);
});

/* DROPDOWN */

var drop = document.querySelector('.seta-mostrar')
var conteudo_mostrar = document.querySelector('.dropdown-content')


drop.addEventListener('click', function(){
    conteudo_mostrar.classList.toggle('show')
})