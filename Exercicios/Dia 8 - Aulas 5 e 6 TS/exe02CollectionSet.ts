import * as input from "readline-sync";

const numeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
  const valor = input.questionInt(`Digite o número inteiro ${i + 1}: `);
  numeros.add(valor);
}

console.log("\nNúmeros inseridos:");
for (const num of numeros) {
  console.log(num);
}

const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);

console.log("\nNúmeros em ordem crescente:");
for (const num of numerosOrdenados) {
  console.log(num);
}
