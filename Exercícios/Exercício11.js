const prompt = require('prompt-sync')()
//Vamos solicitar ao usuário 5 números e calculas a soma total
//Vamos iniciar a soma fora do looping e ir adcionando o valor que o usuário botar
let soma = 0
for (i = 0; i < 5; i++){
    let b = Number(prompt("Digite um número: "))
    soma += b
}
console.log("A soma dos 5 números é: ", soma)