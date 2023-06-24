var txtNum1 = document.querySelector("#num1")
var txtNum2 = document.querySelector("#num2")
var txtResultado = document.querySelector("#resultado")

function sumar(){
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)

    txtResultado.value = num1 + num2
}

function restar(){
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)

    txtResultado.value = num1 - num2
};

function multiply(){
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)
    
    txtResultado.value = num1 * num2
}

function dividir() {
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)

    txtResultado.value = num1 / num2
}

function exponenciar(){
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)

    txtResultado.value = num1 ^ num2
}
function racionalizar(){
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)

    txtResultado.value = num1 ^ (1/num2)
}
 