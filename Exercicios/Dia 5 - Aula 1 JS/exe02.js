let leia = require('readline-sync')

let n1, n2, n3, n4
let media
console.log("Digite as notas (enter para uma nova nota): ")

n1 = leia.questionFloat()
n2 = leia.questionFloat()
n3 = leia.questionFloat()
n4 = leia.questionFloat()

media = (n1+n2+n3+n4) / 4

console.log("Media Final: %f", media)