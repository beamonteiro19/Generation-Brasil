import * as input from "readline-sync";

const arrayCores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
  const cor = input.question(`Digite a cor ${i + 1}: `);
  arrayCores.push(cor);
}

console.log("\nCores digitadas:");
for (let cor of arrayCores) {
  console.log(cor);
}

arrayCores.sort();

console.log("\nAs cores em ordem crescente são:");
for (let cor of arrayCores) {
  console.log(cor);
}