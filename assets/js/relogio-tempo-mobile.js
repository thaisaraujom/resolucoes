let relogio_mobile = document.querySelector('.relogio-mobile')
let tempo_mobile = document.querySelector('.tempo-valor-restante')

relogio_mobile.addEventListener('click', function() {
    tempo_mobile.classList.remove('tempo-clique')
    relogio_mobile.style.display = 'none'
})
tempo_mobile.addEventListener('click', function() {
    tempo_mobile.classList.add('tempo-clique')
    relogio_mobile.style.display = 'flex'
})

/* ----------------------------------- TEMPO CLIQUE ------------------------------------- */
var time_digitado2 = document.querySelector('.progresso_tempo').textContent;
var format2 = Number(time_digitado2)

var min2, seg1;

min2 = Math.floor(format2 / 60);
seg2 = Math.floor(format2 % 60) + 1

var progressbarinner = document.querySelector('.bar_tempo_progresso')
var duration = document.querySelector('.progresso_tempo').innerHTML;
progressbarinner.style.animationDuration = duration + 's';
console.log(duration)
// var durationMinutes = (duration/60);
relogio2(Number(duration))

function relogio2(time) {
	var qtd_minutos_simulado1 = document.querySelector('.qtd-minutos-simulado1')
	if ((min2 > 0) || (seg2 > 0)) {
		if (seg2 == 0) {
			seg2 = 59
			min2 = min2 - 1
		}
		else {
			seg2 = seg2 - 1
		}
		if (min2.toString().length == 1) {
			min2 = "0" + min2
		}
		if (seg2.toString().length == 1) {
			seg2 = "0" + seg2
		}
		qtd_minutos_simulado1.innerHTML = min2 + ":" + seg2
		setTimeout('relogio2()', 1000)
	} else {
		qtd_minutos_simulado1.innerHTML = "00:00";
		let form = document.getElementById('signup-form');
		form.submit()

	}
}