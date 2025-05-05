const prompt = require('prompt-sync')()
// Primeiro vamos receber o número
let numero = Number(prompt("Insira o número: "))
// Depois vamos verificar por meio do resto por dois se é par ou ímpar
if(numero % 2 == 0){
    console.log("O número é par")
}else{
    console.log("O número é impar")
}