/*
Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) 
e a quantidade comprada deste item (número inteiro). A seguir, 
mostre na tela o valor total da conta e o nome do produto que foi comprado.
*/
const input = require("readline-sync");




console.log("# ## ### #### #########   Menu   ########## #### ### ## #")
console.log("\n--                     Escolha:                  --")

console.log("\n--      Cargo                     Percentual     --")
console.log("\n--   (1) Gerente                     10%         --")
console.log("\n--   (2) Vendedor                     7%         --")
console.log("\n--   (3) Supervisor                   9%         --")
console.log("\n--   (4) Motorista                    6%         --")
console.log("\n--   (5) Estoquista                   5%         --")
console.log("\n--   (6) Técnico de TI                8%         --")

let nome = input.question("Insira seu nome\n")
let codCargo = input.questionInt("Escolha um cargo de 1 a 6 \n")
let salario = input.questionInt("Insira seu salario: \n")


let percentual
let cargo


switch(codCargo){
    case 1:
        percentual = 0.1
        cargo = "Gerente"
    break

    case 2: 
        percentual = 0.07
        cargo = "Vendedor"
    break

    case 3: 
        percentual = 0.09
        cargo = "Supervisor"
    break

    case 4: 
        percentual = 0.06
        cargo = "Motorista"
    break

    case 5: 
        percentual = 0.05
        cargo = "Estoquista"
    break

    case 6: 
        percentual = 0.08
        cargo = "Técnico de TI"
    break
}

if(percentual > 0){
    let novoSalario = salario + (percentual * salario)
    console.log(`\nOlá, ${nome}. Cargo selecionado: ${cargo}`)
    console.log(`Salario reajustado de: R$ ${salario.toFixed(2)}, para R$ ${novoSalario.toFixed(2)}, para o cargo de: ${cargo}`)
}