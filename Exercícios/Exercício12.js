const prompt = require('prompt-sync')()
//Vamos entregar a tabuada de um número escolhido pelo usuário
//Primeiro vamos receber esse número
let numero = Number(prompt("Digite o número que deseja ter a tabuada: "))
//Agora utilizando um for iremos retornar a tabuada do número
for(i = 1; i <= 10;i++){
    console.log(numero, "x", i , "=", numero * i)
}