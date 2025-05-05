const prompt = require('prompt-sync')()
//Vamos imprimir fibonacci até o termo que o usuário desejar
//Vamos receber primeiro o valor
let qtd_termo = Number(prompt("Digite a quantidade de termos que deseja receber da sequência de fibonacci: "))
let t1 = 0
let t2 = 1
console.log(t2)
for(i = 2; i <= qtd_termo; i ++){
    let t3 = t2 + t1
    console.log(t3)
    t1 = t2
    t2 = t3
}