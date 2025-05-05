 const prompt = require('prompt-sync')()
// *********************************************************** PRIMEIRO EXERCÍCIO ***************************
// // Primeiro vamos receber o número
// let numero = Number(prompt("Insira o número: "))
// // Depois vamos verificar por meio do resto por dois se é par ou ímpar
// if(numero % 2 == 0){
//     console.log("O número é par")
// }else{
//     console.log("O número é impar")
// }
// *********************************************************** SEGUNDO EXERCÍCIO *****************************
// // Primeiro vamos receber a idade do usuário
// let idade = Number(prompt("Insira a sua idade: "))
// // Agora por meio de diversos elses iremos dividir em grupos e depois responder ao usuário
// if(idade > 0 && idade <= 12){
//     console.log("Você é uma criança")
// }else if(idade > 12 && idade <= 17){
//     console.log("Você é uma adolescente")
// }else if(idade > 17 && idade <= 59){
//     console.log("Você é um adulto")
// }else if (idade > 59 && idade <= 120){
//     console.log("Você é um idoso")
// }else{
//     console.log("Idade inválida")
// }
//************************************************************* TERCEIRO EXERCÍCIO ****************************
// // Primeiro vamos receber a nota do aluno
// let nota = Number(prompt('Insira a sua nota: '))
// // Agora, depois de receber a nota, fazemos um if-else if e dividimos em casos
// if (nota < 5 && nota >= 0){
//     console.log("Reprovado")
// } else if (nota >= 5 && nota <7){
//     console.log("Recuperação")
// } else if (nota >= 7 && nota <= 10){
//     console.log("Aprovado")
// } else{
//     console.log("Nota inválida")
// }
//************************************************************** QUARTO EXERCÍCIO ******************************
// // Primeiro recebemos todas as entradas
// let n1 = Number(prompt("Digite o primeiro número: "))
// let n2 = Number(prompt("Digite o segundo número: "))
// let op = prompt("Digite a operação que deseja fazer (+, -, /, *): ")
// // Um menu interativo no console como exemplo uma calculadora simples
// switch (op){
//     case ("+"): console.log(n1, " + ", n2, " = ", n1 + n2)
//     break;
//     case ("-"): console.log(n1, " - ", n2, " = ", n1 - n2)
//     break;
//     case ("/"): console.log(n1, " / ", n2, " = ", n1/n2)
//     break;
//     case ("*"): console.log(n1, " * ", n2, " = ", n1*n2)
//     break;
//     default:
//         console.log("Operação inválida")
// }
// ************************************************************ QUINTO EXERCÍCIO *******************************
// // Vamos receber o peso e a altura
// let peso = Number(prompt("Digite o seu peso: "))
// let altura = Number(prompt("Digite sua altura: "))
// // Agora vamos calcular o IMC 
// let imc = peso / (altura * altura)
// // E vamos mostrar ao usuário
// if(imc < 18.5){
//     console.log("Abaixo do peso")
// } else if (imc >= 18.5 && imc < 24.9){
//     console.log("Peso Ideal")
// } else if (imc >= 24.9 && imc < 29.9){
//     console.log("Acima do peso")
// } else {
//     console.log("Obesidade")
// }
// ************************************************************ SEXTO EXERCÍCIO ******************************
// console.log("Vamos verificar se é possível ser um triângulo, e se for de qual tipo: " )
// //Vamos receber os 3 lados do triângulo
// let A = Number(prompt("Digite o valor do primeiro lado: "))
// let B = Number(prompt("Digite o valor do segundo lado: "))
// let C = Number(prompt("Digite o valor do terceiro lado: "))
// //Vamos verificar se os lados podem ser de um triângulo
// if (A >= B + C || B >= A + C || C >= A + B){
//     console.log("Não forma um triângulo")
// //Vamos também ver se os lados são negativos, pois se forem não pode existir
// } else if (A < 0 || B < 0 || C < 0){
//     console.log("Triângulo não pode existir com lados negativos")
// //Agora criamos if e else if para podermos entregar ao usuário o tipo de triângulo
// } else {
//      if (A == B && A == C){
//         console.log("É um triângulo equilátero")
//     }
//       else if (A == B || A == C || B == C){
//         console.log("É um triângulo isósceles")
//     } else if (A != B && A != C && B != C){
//         console.log("É um triângulo escaleno")
//     } 
// }
// ********************************************************** SÉTIMO EXERCÍCIO *********************************
// //Primeiro queremos saber quantas maçãs foram compradas
// let qtd_maçã = Number(prompt("Digite a quantidade de maçãs: "))
// //Agora vamos calcular o valor, usando um if para o total dependendo da qtd
// if (qtd_maçã < 12){
//     console.log("O valor total da compra foi: " , qtd_maçã * 0.30, "R$")
// }else {
//     console.log("O valor total da compra foi: " , qtd_maçã * 0.25, "R$")
// }
// ********************************************************** OITAVO EXERCÍCIO **********************************
// //Primeiro vamos ler os 2 valores
// let v1 = Number(prompt("Digite o primeiro número: "))
// let v2 = Number(prompt("Digite o segundo número: "))
// //Agora vamos criar com if, um output para mostrar ao usuário em ordem crescente
// if (v1 > v2){
//     console.log("Os números em ordem crescente ficam: ", v2 , ",", v1)
// } else{
//     console.log("Os números em ordem crescente ficam: ", v1 , ",", v2)
// }
// ********************************************************** NONO EXERCÍCIO ***********************************
// //Basta apenas fazer um loop utilizando um for
// for (let i = 10; i > 0;i--){
//     console.log(i)
// }
// ********************************************************** DÉCIMO EXERCÍCIO **********************************
// //Vamos receber o número e retorná-lo 10 vezes
// let numero = Number(prompt("Digite um número: "))
// //Agora vamos retornar o número 10 vezes
// for (i = 10; i > 0;i--){
//     console.log(numero)
// }
// ********************************************************* DÉCIMO PRIMEIRO EXERCÍCIO *************************
// //Vamos solicitar ao usuário 5 números e calculas a soma total
// //Vamos iniciar a soma fora do looping e ir adcionando o valor que o usuário botar
// let soma = 0
// for (i = 0; i < 5; i++){
//     let b = Number(prompt("Digite um número: "))
//     soma += b
// }
// console.log("A soma dos 5 números é: ", soma)
// ******************************************************** DÉCIMO SEGUNDO EXERCÍCIO ****************************
// //Vamos entregar a tabuada de um número escolhido pelo usuário
// //Primeiro vamos receber esse número
// let numero = Number(prompt("Digite o número que deseja ter a tabuada: "))
// //Agora utilizando um for iremos retornar a tabuada do número
// for(i = 1; i <= 10;i++){
//     console.log(numero, "x", i , "=", numero * i)
// }
// ******************************************************** DÉCIMO TERCEIRO EXERCÍCIO ***************************
// //Vamos receber números decimais até o usuário digitar 0 e calcular a média aritmética desses números
// //Vamos utilizar um while para isso
// let soma = 0
// let qtd = 0
// let numero = 2
// console.log("Digite os números que deseja a média aritmética, quando quiser a média digite 0")
// while (true){
//     let numero = Number(prompt(" Digite : "))
//     if (numero == 0){
//         break
//     }
//     soma += numero
//     qtd++
// }
// console.log("A média aritmética é: ", soma/qtd)
// ****************************************************** DÉCIMO QUARTO EXERCÍCIO *****************************
// //Vamos calcular o fatoria de um número utilizando for
// //Vamos receber o número
// let numero = Number(prompt("Digite o número que deseja ter o fatorial: "))
// let fatorial = numero
// for (i = numero - 1; i > 0;i--){
//     fatorial *= i 
// }
// console.log(numero,"! = ", fatorial)
// ****************************************************** DÉCIMO QUINTO EXERCÍCIO ****************************
// //Vamos imprimir fibonacci até o termo que o usuário desejar
// //Vamos receber primeiro o valor
// let qtd_termo = Number(prompt("Digite a quantidade de termos que deseja receber da sequência de fibonacci: "))
// let t1 = 0
// let t2 = 1
// console.log(t2)
// for(i = 2; i <= qtd_termo; i ++){
//     let t3 = t2 + t1
//     console.log(t3)
//     t1 = t2
//     t2 = t3
// }