const input = require('readline-sync')

let n1, n2, n3

n1 = input.questionInt("Insira o primeiro número: ")
n2 = input.questionInt("Insira o primeiro número: ")
n3 = input.questionInt("Insira o primeiro número: ")

if((n1+n2) > n3){
    console.log("A soma entre n1 e n2 é maior que n3")

} else if(n1+n2 < n3){
    console.log("A soma entre n1 e n2 é menor que n3")
} else{
    console.log("A soma entre n1 e n2 é igual n3")
}