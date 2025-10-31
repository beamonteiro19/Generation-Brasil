const input = require('readline-sync')

let n 

n = input.questionInt("Insira um número aqui: ")

if(n > 0 && n % 2 == 0){
    console.log("O numéro inserido : "+n+ " é positivo e par")
} else if(n > 0 && n % 2 != 0){
    console.log("O numéro inserido : "+n+ " é positivo e ímpar")
} else if(n < 0 && n % 2 == 0){
    console.log("O numéro inserido : "+n+ " é negativo e par")
} else if(n < 0 && n % 2 != 0){
    console.log("O numéro inserido : "+n+ " é negativo e ímpar")
}