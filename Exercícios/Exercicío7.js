const prompt = require('prompt-sync')()
//Primeiro queremos saber quantas maçãs foram compradas
let qtd_maçã = Number(prompt("Digite a quantidade de maçãs: "))
//Agora vamos calcular o valor, usando um if para o total dependendo da qtd
if (qtd_maçã < 12){
    console.log("O valor total da compra foi: " , qtd_maçã * 0.30, "R$")
}else {
    console.log("O valor total da compra foi: " , qtd_maçã * 0.25, "R$")
}