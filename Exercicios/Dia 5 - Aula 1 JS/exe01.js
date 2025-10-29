let leia = require('readline-sync')

let salario, abono, novoSalario

console.log("\nDigite seu salário: ")
salario = leia.questionFloat()


console.log("\nDigite o valor do abono salarial: ")
abono = leia.questionFloat()

novoSalario = salario - abono
console.log("\nO valor final do seu salário é de: R$"+ novoSalario+",00")