const input = require('readline-sync')



let vetorInteiro = new Array(5)  //tamanho maximo do vetor

for(let indice = 0; indice < 5; indice ++){
    vetorInteiro[indice] = input.questionInt(`Digite o numero ${indice + 1}: `)
}
console.log(`Os numeros digitadoss foram:  \n`)


for(let indice = 0; indice < 5; indice ++){
    console.log(`${indice +1}° elemento: ${vetorInteiro[indice]}`)
}
console.log(`Numero de vetores: ${vetorInteiro.length}`)