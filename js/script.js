
const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minuto')
const segundos = document.querySelector('#segundo')
const dias = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const bom = document.querySelector('#boas_vindas')

setInterval(relogio, 1000)

function relogio() {
    hoje = new Date()
    h = hoje.getHours()
    m = hoje.getMinutes()
    s = hoje.getSeconds()
    d = hoje.getDays()
    mt = hoje.getMounths()
    y = hoje.getYears()

    if (h < 10) {
        h = '0'+h
    }
    if (m < 10) {
        m = '0'+m
    }
    if (s < 10) {
        s = '0'+s
    }

    if (h < 12) {
        bom = console.log('Bom dia')
    }
    else if (h >= 12) {
        bom = console.log('Boa tarde')
    }

    else if (h >= 18) {
        bom = console.log('Boa noite')
    }

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
    dias.textContent = d
    mes.textContent = mt
    ano.textContent = y
}