//requerindo que a constante leia use os atributos dessa bibioteca npm
const leia = require('readline-sync'); 
let nome, distancia

//Entrada de dados
console.log("\nDigite o seu nome")
nome = leia.question()

console.log("\nDigite a distancia percorrida na corrida: ")
distancia =  leia.questionFloat()

// Saida de Dados
console.log("\nBom dia, "+ nome)
console.log("\nA distancia percorrida foi de: "+ distancia +" quilometros")





/* 
o ponto invoca as funções da biblioteca require que esta em "leia"
Faz a leitura, via teclado, de uma cadeia de caracteres simples ou composta, ou seja, string.
a informação digitadfa vai ser lida e guardadda em nome
*/