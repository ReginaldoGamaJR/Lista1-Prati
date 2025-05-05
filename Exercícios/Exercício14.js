const prompt = require('prompt-sync')()
//Vamos calcular o fatoria de um número utilizando for
//Vamos receber o número
let numero = Number(prompt("Digite o número que deseja ter o fatorial: "))
let fatorial = numero
for (i = numero - 1; i > 0;i--){
    fatorial *= i 
}
console.log(numero,"! = ", fatorial)