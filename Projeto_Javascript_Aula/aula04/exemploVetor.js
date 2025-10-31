let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

// console.log(vetorStrings[0] --> com o colchetes, indico qual posição do vetor quero acessar
// console.log(vetorStrings[1])
// console.log(vetorStrings[2])
// console.log(vetorStrings[3])
// console.log(vetorStrings[4])


for(let indice = 0; indice < 5; indice ++){
    console.log(`${indice +1}° elemento: ${vetorStrings[indice]}`)
}
console.log(vetorStrings.length)