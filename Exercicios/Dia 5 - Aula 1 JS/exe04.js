let leia = require('readline-sync')

let n1, n2, n3, n4
let diferenca
console.log("Digite 2 valores para n1 e n2 (enter para um novo valor): ")
n1 = leia.questionFloat()
n2 = leia.questionFloat()

console.log("Digite 2 valores para n3 e n4 (enter para um novo valor): ")
n3 = leia.questionFloat()
n4 = leia.questionFloat()

diferenca  = (n1 * n2 ) - (n3 * n4)

console.log("A diferença é de: ",diferenca)