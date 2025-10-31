/*
Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, 
só podem doar sangue se não for a sua primeira doação. 
Escreva um Algoritmo que leia via teclado o nome do doador (string), 
a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). 
Conforme as Regras para a doação de sangue citadas acima, 
mostre na tela se o doador está Apto ou Não Apto para doar sangue. 
*/

const input = require('readline-sync')

let nome = input.question("Insira seu nome: ")
let idade = input.questionInt("Insira sua idade: ")
let resposta = input.question("Já foi doador antes? (s/n): ").toLowerCase()


let doador = (resposta === "s")


if(idade > 18 && idade <= 59){
    console.log(`${nome}, você está apto para realizar exames para doar sangue`)
} else if(idade >= 60 && idade <= 69 && doador === true){
    console.log(`${nome}, você está apto para realizar exames para doar sangue`)

}else{
    console.log(`${nome}, você é inapto para doação de sangue`)
}