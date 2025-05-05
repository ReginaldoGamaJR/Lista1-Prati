const prompt = require('prompt-sync')()
// Vamos receber o peso e a altura
let peso = Number(prompt("Digite o seu peso: "))
let altura = Number(prompt("Digite sua altura: "))
// Agora vamos calcular o IMC 
let imc = peso / (altura * altura)
// E vamos mostrar ao usuário
if(imc < 18.5){
    console.log("Abaixo do peso")
} else if (imc >= 18.5 && imc < 24.9){
    console.log("Peso Ideal")
} else if (imc >= 24.9 && imc < 29.9){
    console.log("Acima do peso")
} else {
    console.log("Obesidade")
}