// Escreva um algoritmo, que leia 10 números inteiros 
// via teclado e mostre na tela quantos números 
// são pares e quantos número são ímpares.


// Laço de Repetição FOR
const input =  require('readline-sync')

let pares = 0 
let impares = 0 


for(i = 0; i < 10; i ++){
let n1 = input.questionInt(`Digite o: ${i}° numero\n`)

    if(n1 %2 === 0){
        pares++ 
        
    }else{
        impares++
    }

}

    console.log(`Total de numeros pares: ${pares}`)
    console.log(`Total de numeros impares: ${impares}`)