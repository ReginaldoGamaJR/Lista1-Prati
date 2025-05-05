const prompt = require('prompt-sync')()
// Primeiro recebemos todas as entradas
let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))
let op = prompt("Digite a operação que deseja fazer (+, -, /, *): ")
// Um menu interativo no console como exemplo uma calculadora simples
switch (op){
    case ("+"): console.log(n1, " + ", n2, " = ", n1 + n2)
    break;
    case ("-"): console.log(n1, " - ", n2, " = ", n1 - n2)
    break;
    case ("/"): console.log(n1, " / ", n2, " = ", n1/n2)
    break;
    case ("*"): console.log(n1, " * ", n2, " = ", n1*n2)
    break;
    default:
        console.log("Operação inválida")
}