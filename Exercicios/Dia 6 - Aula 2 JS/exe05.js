/*
Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) 
e a quantidade comprada deste item (número inteiro). A seguir, 
mostre na tela o valor total da conta e o nome do produto que foi comprado.
*/
const input = require("readline-sync");




console.log("# ## ### #### #########   Menu   ########## #### ### ## #")
console.log("\n--                 Escolha um produto             --")

console.log("\n--            Item                      Valor     --")
console.log("\n--   (1) Cachorro Quente              R$ 10.00    --")
console.log("\n--   (2) X-Salada                     R$ 15.00    --")
console.log("\n--   (3) X-Bacon                      R$ 18.00    --")
console.log("\n--   (4) Bauru                        R$ 12.00    --")
console.log("\n--   (5) Refrigerante                 R$ 8.00     --")
console.log("\n--   (6) Suco de Laranaja             R$ 13.00    --")


let codItem = input.questionInt("\nEscolha um item de 1 a 6 ")
let qnt = input.questionInt("\nSelecione uma quantidade ")

let precoProd
let nomeProd

switch(codItem){
    case 1:
        precoProd = 10.00
        nomeProd = "Cachorro Quente"
    break

    case 2: 
        precoProd = 15.00
        nomeProd = "X-Salada"
    break

    case 3: 
        precoProd = 18.00
        nomeProd = "X-Bacon"
    break

    case 4: 
        precoProd = 12.00
        nomeProd = "Bauru"
    break

    case 5: 
        precoProd = 8.00
        nomeProd = "Refrigerante"
    break

    case 6: 
        precoProd = 12.00
        nomeProd = "Suco de Laranaja"
    break
}

if(precoProd > 0){
    let valorTotal = precoProd * qnt
    console.log(`\nVocê pediu ${qnt}x ${nomeProd}.`)
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`)
}