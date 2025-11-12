import readline = require("readline-sync");
import { dividir } from './Funcoes';

export function main(){

let resultado: number | null;
    try {
        let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
        let numero2: number = readline.questionFloat("Digite o segundo numero: ");

        resultado = dividir(numero1, numero2);

        console.log("O Resultado da divisão é: " + resultado);

    } catch (error) {
        console.error("Erro: " + error);
    }

}
main()
