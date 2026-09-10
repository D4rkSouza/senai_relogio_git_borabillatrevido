const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minuto')
const segundos = document.querySelector('#segundo')
const dias = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')

setInterval(relogio, 1000)

function relogio() {
    hoje = new Date()
    h = hoje.getHours()
    m = hoje.getMinutes()
    s = hoje.getSeconds()
    d = hoje.getDays()
    mt = hoje.getMounths()
    y = hoje.getYears()
}