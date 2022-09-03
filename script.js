// DOM
const numero1 = document.getElementById('op1')
const txtOperacion = document.getElementById('operacion')
const numero2 = document.getElementById('op2')
const btnCalculat = document.getElementById('calcular')
const presultado = document.getElementById('resultado')
const btnHistorial = document.getElementById('btnHistorial')
const pHistorial = document.getElementById('pHistorial')
const btnClear = document.getElementById('btnClear')

// Events
btnCalculat.addEventListener('click', calcular)
btnHistorial.addEventListener('click', MostrarHistorial)
btnClear.addEventListener('click', clearHistory)

// variables
let historial = [] // historial de resultados
let resultado

// functions
function calcular() {
    const operacion = txtOperacion.value
    const op1 = parseFloat(numero1.value)
    const op2 = parseFloat(numero2.value)

    if ((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)) { //isNaN: No es un Numero

        switch (operacion) {
            case "+":
                resultado = op1+op2
                historial.push(resultado)
                break;

            case "-":
                resultado = op1-op2
                historial.push(resultado)
                break;

            case "*":
                resultado = op1*op2
                historial.push(resultado)
                break;

            case "/":
                resultado = op1/op2
                historial.push(resultado)
                break;
        
            default:
                break;
        }
        
        presultado.innerHTML = "resultado = " + resultado
    } else {
        presultado.innerHTML = 'Calculo Imposible'
    }
}

function MostrarHistorial() {
    pHistorial.innerHTML = `Historial: ${historial}`

    // historial.forEach(resultado => { //recorre al array mostrando cada elemento (NO ME FUNCIONA)
    //     pHistorial.innerHTML = "Historial: " + resultado
    // });
}

function clearHistory() {
    pHistorial.innerHTML = historial = []
}