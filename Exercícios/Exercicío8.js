const prompt = require('prompt-sync')()
//Primeiro vamos ler os 2 valores
let v1 = Number(prompt("Digite o primeiro número: "))
let v2 = Number(prompt("Digite o segundo número: "))
//Agora vamos criar com if, um output para mostrar ao usuário em ordem crescente
if (v1 > v2){
    console.log("Os números em ordem crescente ficam: ", v2 , ",", v1)
} else{
    console.log("Os números em ordem crescente ficam: ", v1 , ",", v2)
}