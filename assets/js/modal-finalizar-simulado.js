let finalizar = document.querySelector('.p-finalizar-simulado')
let finalizar_mobile = document.querySelector('.fim-simulado-mobile')

let tempo_valor = document.querySelector('.tempo-valor')

let modal_finalizar = document.querySelector('.modal-finalizar-overlay')
let simbolo_sair = document.querySelector('.x-sair')
let simbolo_tempo = document.querySelector('.relogio-simulado') 

let voltar_simulado = document.querySelectorAll('.voltar-simulado')

finalizar.addEventListener('click', function () {
    modal_finalizar.style.visibility = 'visible'
})

finalizar_mobile.addEventListener('click', function () {
    modal_finalizar.style.visibility = 'visible'
})

simbolo_sair.addEventListener('click', function () {
    modal_finalizar.style.visibility = 'hidden'
})

voltar_simulado.forEach((voltar_simulado_single) => {
    voltar_simulado_single.addEventListener('click', function () {
        modal_finalizar.style.visibility = 'hidden'
    })
})



/* ---------------------- MOUSE POR CIMA DO RELÓGIO ---------------------- */

simbolo_tempo.addEventListener("mouseenter", function(){
    tempo_valor.style.display = 'flex'
    finalizar.style.display = 'none'
})

simbolo_tempo.addEventListener("mouseleave", function(){
    tempo_valor.style.display = 'none'
    finalizar.style.display = 'flex'
})

/* ----------------------------------- TEMPO HOVER ------------------------------------- */
var time_digitado1 = document.querySelector('.progresso_tempo').textContent;
var format1 = Number(time_digitado1)

var min1, seg1;

min1 = Math.floor(format1 / 60);
seg1 = Math.floor(format1 % 60) + 1

var progressbarinner = document.querySelector('.bar_tempo_progresso')
var duration = document.querySelector('.progresso_tempo').innerHTML;
progressbarinner.style.animationDuration = duration + 's';
console.log(duration)
// var durationMinutes = (duration/60);
relogio1(Number(duration))

function relogio1(time) {
	var qtd_minutos_simulado = document.querySelector('.qtd-minutos-simulado')
	if ((min1 > 0) || (seg1 > 0)) {
		if (seg1 == 0) {
			seg1 = 59
			min1 = min1 - 1
		}
		else {
			seg1 = seg1 - 1
		}
		if (min1.toString().length == 1) {
			min1 = "0" + min1
		}
		if (seg1.toString().length == 1) {
			seg1 = "0" + seg1
		}
		qtd_minutos_simulado.innerHTML = min1 + ":" + seg1
		setTimeout('relogio1()', 1000)
	} else {
		qtd_minutos_simulado.innerHTML = "00:00";
	}
}