const prompt = require('prompt-sync')()
//Vamos receber números decimais até o usuário digitar 0 e calcular a média aritmética desses números
//Vamos utilizar um while para isso
let soma = 0
let qtd = 0
let numero = 2
console.log("Digite os números que deseja a média aritmética, quando quiser a média digite 0")
while (true){
    let numero = Number(prompt(" Digite : "))
    if (numero == 0){
        break
    }
    soma += numero
    qtd++
}
console.log("A média aritmética é: ", soma/qtd)