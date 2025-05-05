const prompt = require('prompt-sync')()
// Primeiro vamos receber a nota do aluno
let nota = Number(prompt('Insira a sua nota: '))
// Agora, depois de receber a nota, fazemos um if-else if e dividimos em casos
if (nota < 5 && nota >= 0){
    console.log("Reprovado")
} else if (nota >= 5 && nota <7){
    console.log("Recuperação")
} else if (nota >= 7 && nota <= 10){
    console.log("Aprovado")
} else{
    console.log("Nota inválida")
}