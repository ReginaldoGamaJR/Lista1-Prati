const prompt = require('prompt-sync')()
console.log("Vamos verificar se é possível ser um triângulo, e se for de qual tipo: " )
//Vamos receber os 3 lados do triângulo
let A = Number(prompt("Digite o valor do primeiro lado: "))
let B = Number(prompt("Digite o valor do segundo lado: "))
let C = Number(prompt("Digite o valor do terceiro lado: "))
//Vamos verificar se os lados podem ser de um triângulo
if (A >= B + C || B >= A + C || C >= A + B){
    console.log("Não forma um triângulo")
//Vamos também ver se os lados são negativos, pois se forem não pode existir
} else if (A < 0 || B < 0 || C < 0){
    console.log("Triângulo não pode existir com lados negativos")
//Agora criamos if e else if para podermos entregar ao usuário o tipo de triângulo
} else {
     if (A == B && A == C){
        console.log("É um triângulo equilátero")
    }
      else if (A == B || A == C || B == C){
        console.log("É um triângulo isósceles")
    } else if (A != B && A != C && B != C){
        console.log("É um triângulo escaleno")
    } 
}

