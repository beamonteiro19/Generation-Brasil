// Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
// construa um algoritmo que consiga pesquisar dados no vetor, 
// onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. 
// Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.

const input = require("readline-sync");

let vetor = [23, 5, 17, 42, 8, 31, 90, 12, 77, 3];

console.log("Vetor atual:", vetor);

let numero = input.questionInt("Digite um número para pesquisar: ");

let posicao = vetor.indexOf(numero);

if (posicao !== -1) {
    console.log(`O número ${numero} está na posição ${posicao} do vetor.`);
} else {
    console.log("Número não encontrado! Digite um número presente no vetor.");
}
