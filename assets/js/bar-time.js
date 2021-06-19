function createProgressbar(id) {
	// We select the div that we want to turn into a progressbar
	var progressbar = document.getElementById(id);

	// We create the div that changes width to show progress
	var progressbarinner = document.querySelector('.bar_tempo_progresso')

	// Now we set the animation parameters
	var duration = document.querySelector('.progresso_tempo').innerHTML;
	progressbarinner.style.animationDuration = duration + 's';

	// var durationMinutes = (duration/60);
	relogio(Number(duration))
	// formatTempo(duration)

	// Append the progressbar to the main progressbardiv
	progressbar.appendChild(progressbarinner);

	// When everything is set up we start the animation
	progressbarinner.style.animationPlayState = 'running';
}

// function formatTempo(time) {
//   var qtd_minutos = document.querySelector('.qtd-minutos')
//   const formatMinuts = Math.floor(time / 60)
//   const formatHoras = Math.floor(formatMinuts / 60)

//   if(formatMinuts >= 60) {
//     return qtd_minutos.textContent = formatHoras + 'h'
//   } else if (time > 60) {
//     if (formatMinuts >= 10 && formatMinuts < 60) {
//       return qtd_minutos.textContent = formatMinuts + 'min'
//     } else if (time>0){
//       return qtd_minutos.textContent = `0${formatMinuts} min`
//     }
//   } else {
//     if (time >= 10) {
//       return qtd_minutos.textContent = `${time} s`
//     } else if (time > 0) {
//       return qtd_minutos.textContent = `0${time}s`
//     } else {
//       return qtd_minutos.textContent = `${time} s`
//     }
//   }
// }

var time_digitado = document.querySelector('.progresso_tempo').textContent;
var format = Number(time_digitado)

var min, seg;

min = Math.floor(format / 60);
seg = Math.floor(format % 60) + 1

function relogio(time) {
	var qtd_minutos = document.querySelector('.qtd-minutos')
	if ((min > 0) || (seg > 0)) {
		if (seg == 0) {
			seg = 59
			min = min - 1
		}
		else {
			seg = seg - 1
		}
		if (min.toString().length == 1) {
			min = "0" + min
		}
		if (seg.toString().length == 1) {
			seg = "0" + seg
		}
		qtd_minutos.innerHTML = min + ":" + seg
		setTimeout('relogio()', 1000)
	} else {
		qtd_minutos.innerHTML = "00:00";
	}
}
// setTimeout(createProgressbar, 1000);	


// setInterval(() => console.log(formatTempo()), 1000)

// function testando(time) {
//   console.log(setInterval('testando()', 1000))
// }
// // testando(60)
// console.log(setInterval(testando, 1000))

addEventListener('load', function () {
	createProgressbar('bar-time');
});