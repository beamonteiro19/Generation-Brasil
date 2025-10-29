let leia = require('readline-sync')

let salarioBruto, salarioLiquido, adicionalNoturno, diasExtras, descontos, valorHoraExtra

console.log("Digite seu Salario Bruto: ")
salarioBruto = leia.questionFloat()

console.log("Digite o valor do Adicional Noturno: ")
adicionalNoturno = leia.questionFloat()

console.log("Digite quantos dias trabalhou com Hora Extra: ")
diasExtras = leia.questionInt()

console.log("Digite o valor da Hora Extra: ")
valorHoraExtra = leia.questionFloat()

console.log("Digite o valor dos descontos: ")
descontos = leia.questionFloat()


salarioLiquido = (salarioBruto + adicionalNoturno + (diasExtras * valorHoraExtra) - descontos)

console.log("Digite seu Salario Liquido é de: R$ %f",salarioLiquido,",00")