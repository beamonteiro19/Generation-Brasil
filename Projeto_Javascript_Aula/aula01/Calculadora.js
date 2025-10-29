const leia = require("readline-sync")

// Declaração Variáveis
let celsius, fahrenheit

// Entrada de Dados
celsius = leia.questionFloat("Insira a temperatura em Celsius: ")

// Processamento
fahrenheit = celsius * 1.8 + 32

// Saída de Dados

console.log("A temperatura em Fahrenheit é: "+ fahrenheit)
console.log("A temperatura em Fahrenheit é: %f", fahrenheit)