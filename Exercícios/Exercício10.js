const prompt = require('prompt-sync')()
//Vamos receber o número e retorná-lo 10 vezes
let numero = Number(prompt("Digite um número: "))
//Agora vamos retornar o número 10 vezes
for (i = 10; i > 0;i--){
    console.log(numero)
}