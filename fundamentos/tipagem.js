/**
 * Tipagem dinânica - JS
 */

// declaração de variáveis
let nome, idade, peso, altura, vip, imc

//estrada de dados
nome = "Eder"
idade = 51
peso = 70
altura = 1.60
vip = true

//a linha abaixo verifica o tipo de variável
//console.log(typeof(vip))

console.clear()

//processamento
//imc (indice de massa corporal | fcm (Frequência cardiáca máxima))
imc = peso / (altura * altura)
fcm = 208 - (0.7 * idade)

//saida
console.log("Ficha do aluno")
console.log ("______________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade:${idade}`)
console.log(`${peso}`)
console.log(`${altura}`)
console.log(`${vip}`)
console.log(`${imc.toFixed(2)}`)
console.log(`${fcm} bmc`)