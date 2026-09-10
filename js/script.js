const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minuto')
const segundos = document.querySelector('#segundo')

const diaMeio = document.querySelector('#dia_meio')
const mesMeio = document.querySelector('#mes_meio')
const anoMeio = document.querySelector('#ano_meio')

const diaDetalhado = document.querySelector('#dia_detalhado')
const mesDetalhado = document.querySelector('#mes_detalhado')
const anoDetalhado = document.querySelector('#ano_detalhado')
const bom = document.querySelector('#boas_vindas')

setInterval(relogio, 1000)

function relogio() {

const hoje = new Date()

let h = hoje.getHours()
let m = hoje.getMinutes()
let s = hoje.getSeconds()

let d = hoje.getDate()
let mt = hoje.getMonth() + 1
let y = hoje.getFullYear()


if (h < 10) {
    h = '0' + h
}

if (m < 10) {
    m = '0' + m
}

if (s < 10) {
    s = '0' + s
}

if (d < 10) {
    d = '0' + d
}

if (mt < 10) {
    mt = '0' + mt
}


// Saudação
if (h < 12) {
    bom.textContent = 'Bom Dia'
}
else if (h < 18) {
    bom.textContent = 'Boa Tarde'
}
else {
    bom.textContent = 'Boa Noite'
}


// Relógio
horas.textContent = h
minutos.textContent = m
segundos.textContent = s


// Data do meio
diaMeio.textContent = d
mesMeio.textContent = mt
anoMeio.textContent = y


// Data detalhada
diaDetalhado.textContent = d
mesDetalhado.textContent = mt
anoDetalhado.textContent = y

}

relogio()