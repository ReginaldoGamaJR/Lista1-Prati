const prompt = require('prompt-sync')()
// Primeiro vamos receber a idade do usuário
let idade = Number(prompt("Insira a sua idade: "))
// Agora por meio de diversos elses iremos dividir em grupos e depois responder ao usuário
if(idade > 0 && idade <= 12){
    console.log("Você é uma criança")
}else if(idade > 12 && idade <= 17){
    console.log("Você é uma adolescente")
}else if(idade > 17 && idade <= 59){
    console.log("Você é um adulto")
}else if (idade > 59 && idade <= 120){
    console.log("Você é um idoso")
}else{
    console.log("Idade inválida")
}