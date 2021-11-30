const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('ativar_situacao')
        })
        tabs.forEach(tab => {
            tab.classList.remove('ativar_situacao')
        })
        tab.classList.add('ativar_situacao')
        target.classList.add('ativar_situacao')

    })
})

let situacao_simulado = document.querySelectorAll('.situacao-simulado')
let situacoes = document.querySelectorAll('.situacao')
let simulados_barra = document.querySelector('.simulados')

simulados_barra.style.borderRadius = '5px'

situacao_simulado.forEach((sit_single) => {

    situacoes.forEach((situacoes_single) => {
        let situacao_graficos = document.querySelectorAll('.meus-graficos');

        situacao_graficos.forEach(graficos_single => {
            graficos_single.addEventListener('click', function () {
                let graficos = document.querySelector('.barras-simulado');
                simulados_barra.style.borderRadius = '5px'

                graficos.classList.remove('hide_graficos')
                graficos.classList.add('ativar_graficos')

                situacoes_single.classList.remove('ativar_status')
                situacoes_single.classList.add('hide_status')

                graficos_single.classList.add('hide_status')

                situacoes_single.classList.remove('ativar_status')

                tabs.forEach(tab => {
                    tab.classList.remove('ativar_situacao')
                })

            })

            sit_single.addEventListener('click', function () {
                situacao_simulado.forEach((sit_single1) => {
                    sit_single1.classList.remove('ativar_status')
                })
                this.classList.add('ativar_status')
                simulados_barra.style.borderRadius = '5px 5px 0 0'

                graficos_single.classList.remove('hide_status')
                graficos_single.classList.remove('hide_graficos')
                graficos_single.classList.add('ativar_status')

                graficos.classList.remove('ativar_graficos')
                graficos.classList.add('hide_graficos')

                let dataStatus = this.getAttribute('data-status')

                situacoes.forEach((situacoes_single) => {
                    situacoes_single.classList.remove('ativar_status')
                    situacoes_single.classList.add('hide_status')

                    if (situacoes_single.getAttribute('data-item') == dataStatus) {
                        situacoes_single.classList.add('ativar_status')
                        situacoes_single.classList.remove('hide_status')
                    }
                })
            })

        })
    })

})

/* ------------------------------------ MOBILE ----------------------------------------- */
// tabs.forEach(tab => {
//     tab.addEventListener('change', () => {
//         const target = document.querySelector(tab.dataset.tabTarget)

//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('ativar_situacao')
//         })
//         tabs.forEach(tab => {
//             tab.classList.remove('ativar_situacao')
//         })
//         tab.classList.add('ativar_situacao')
//         target.classList.add('ativar_situacao')

//     })
// })

// let situacao_simulado = document.querySelectorAll('#simulados-select')
// let situacoes = document.querySelectorAll('.situacao')

// situacao_simulado.forEach((sit_single) => {

//     situacoes.forEach((situacoes_single) => {
//         let situacao_graficos = document.querySelectorAll('.meus-graficos');

//         situacao_graficos.forEach(graficos_single => {
//             graficos_single.addEventListener('click', function () {
//                 let graficos = document.querySelector('.barras-simulado');

//                 graficos.classList.remove('hide_graficos')
//                 graficos.classList.add('ativar_graficos')

//                 situacoes_single.classList.remove('ativar_status')
//                 situacoes_single.classList.add('hide_status')

//                 graficos_single.classList.add('hide_status')

//                 situacoes_single.classList.remove('ativar_status')

//                 tabs.forEach(tab => {
//                     tab.classList.remove('ativar_situacao')
//                 })

//             })

//             sit_single.addEventListener('change', function () {
//                 situacao_simulado.forEach((sit_single1) => {
//                     sit_single1.classList.remove('ativar_status')
//                 })
//                 this.classList.add('ativar_status')

//                 graficos_single.classList.remove('hide_status')
//                 graficos_single.classList.remove('hide_graficos')
//                 graficos_single.classList.add('ativar_status')

//                 graficos.classList.remove('ativar_graficos')
//                 graficos.classList.add('hide_graficos')

//                 let dataStatus = this.getAttribute('data-status')

//                 situacoes.forEach((situacoes_single) => {
//                     situacoes_single.classList.remove('ativar_status')
//                     situacoes_single.classList.add('hide_status')
//                     console.log(situacoes_single);

//                     if (situacoes_single.getAttribute('data-item') == dataStatus) {
//                         situacoes_single.classList.add('ativar_status')
//                         situacoes_single.classList.remove('hide_status')
//                     }
//                 })
//             })

//         })
//     })

// })

const situacao_simulado1 = document.getElementById('simulados-situacao')
const situacao1 = Array.from(document.querySelectorAll('.situacao'));
const situacoes_single = document.querySelectorAll('.situacoes_single');
const meus_graficos = document.querySelectorAll('.meus-graficos')

situacao_simulado1.addEventListener('change', function () {
    let barras_simulado = document.querySelector('.barras-simulado')
    if (barras_simulado.dataset.item != situacao_simulado1.value) {
        barras_simulado.classList.remove('ativar_graficos');
        barras_simulado.classList.remove('ativar_status');
        barras_simulado.classList.add('hide_graficos');
    } else {
        barras_simulado.classList.remove('hide_graficos');
        barras_simulado.classList.remove('hide_status');
        barras_simulado.classList.add('ativar_graficos');
    }

    situacoes_single.forEach(situacao_single => {
        situacao_single.classList.add('ativar_graficos')
    })

    for (let i = 0; i < situacao1.length; i++) {
        if (situacao1[i].dataset.item != situacao_simulado1.value) {

            situacao1[i].classList.add('hide_status');
            situacao1[i].classList.remove('ativar_status');

        } else {
            situacao1[i].classList.remove('hide_status');
            situacao1[i].classList.add('ativar_status');
        }
    }
})